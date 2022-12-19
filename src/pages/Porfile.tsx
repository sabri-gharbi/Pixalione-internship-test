import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ProfileForm from "../components/Profile/ProfileForm";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import formateDate from "../Utils/formateDate";
import { User } from "../types/User";

const Porfile = () => {
  const { curUser } = useAuth();

  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(true);

  const { register, handleSubmit, reset } = useForm<User>({
    defaultValues: { lastName: "gharbi" },
  });

  useEffect(() => {
    if (curUser) {
      axios
        .get<User>(
          `https://639f3fcf7aaf11ceb8966686.mockapi.io/users/${curUser.sub}`
        )
        .then((response) => {
          reset(() => {
            const formattedBirthDay = formateDate(
              new Date(response.data.birthday)
            );

            return { ...response.data, birthday: formattedBirthDay };
          });
        });
    }
  }, []);

  const onSubmit = (data: User) => {
    if (curUser) {
      axios
        .put<User>(
          `https://639f3fcf7aaf11ceb8966686.mockapi.io/users/${curUser.sub}`,
          data
        )
        .then((response) => {
          reset(() => {
            const formattedBirthDay = formateDate(
              new Date(response.data.birthday)
            );

            return { ...response.data, birthday: formattedBirthDay };
          });

          setIsFormDisabled(true);
        });
    }
  };

  return (
    <div className="m-5">
      <div className="d-flex justify-content-end mb-2">
        {isFormDisabled ? (
          <Button
            variant="primary"
            className="w-25"
            onClick={() => setIsFormDisabled(!isFormDisabled)}
          >
            Edit information
          </Button>
        ) : (
          <Button
            className="w-25"
            variant="secondary"
            onClick={() => {
              reset();
              setIsFormDisabled(!isFormDisabled);
            }}
          >
            Cancel
          </Button>
        )}
      </div>

      <ProfileForm
        disabled={isFormDisabled}
        {...{ register, handleSubmit, onSubmit }}
      />
    </div>
  );
};

export default Porfile;
