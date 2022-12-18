export type User = {
  firstName: string;
  lastName: string;
  nickName?: string;
  birthDay: Date;
  gender: "male" | "female";
  role: "student" | "instructor";
};

export type LoginPayload = {
  userName: string;
  password: string;
};
