import { useState, useEffect } from "react";
import CourseList from "../components/Courses/CourseList";

import axios from "axios";
import { Course } from "../types/Course";

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios
      .get<Course[]>("https://639f3fcf7aaf11ceb8966686.mockapi.io/courses")
      .then((response) => {
        setCourses(response.data);
      });
  }, []);

  const handleAddCourse = (course: Course) => {
    axios
      .post<Course>(
        "https://639f3fcf7aaf11ceb8966686.mockapi.io/courses",
        course
      )
      .then((response) => setCourses([...courses, response.data]));
  };

  return (
    <div>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;
