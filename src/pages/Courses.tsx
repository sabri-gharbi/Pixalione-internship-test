import { useState, useEffect } from "react";
import CourseList from "../components/Courses/CourseList";
import axios from "axios";
import { Course } from "../types/Course";
import NewCourseModal from "../components/Courses/NewCourseModal";

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get<Course[]>("https://639f3fcf7aaf11ceb8966686.mockapi.io/courses")
      .then((response) => {
        setCourses(response.data);
      });
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleAddCourse = (course: Course) => {
    axios
      .post<Course>(
        "https://639f3fcf7aaf11ceb8966686.mockapi.io/courses",
        course
      )
      .then((response) => {
        setCourses([...courses, response.data]);
        setShowModal(false);
      });
  };

  return (
    <div className="mt-5">
      <NewCourseModal
        show={showModal}
        onHide={handleHideModal}
        onSubmit={handleAddCourse}
      />

      <CourseList {...{ courses, handleShowModal }} />
    </div>
  );
};

export default Courses;
