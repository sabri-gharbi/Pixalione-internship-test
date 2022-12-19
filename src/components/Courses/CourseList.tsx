import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Table,
  Pagination,
  Row,
  Col,
} from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import { Course } from "../../types/Course";

interface Props {
  courses: Course[];
  handleShowModal: () => void;
}

const CourseList: React.FC<Props> = ({ courses, handleShowModal }) => {
  const { curUser } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;

  // Filter the courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate the courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const paginatedCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Handle changing the page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Form className="my-3">
        <div className="d-flex justify-content-end">
          <div className="d-flex me-auto">
            <FormControl
              type="text"
              placeholder="Search courses by name or time"
              className="me-2 "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary">Search</Button>
          </div>

          {curUser && curUser.role === "instructor" && (
            <Button variant="primary" onClick={handleShowModal}>
              Add New Course
            </Button>
          )}
        </div>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Subject</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Number of Students</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCourses.map((course) => (
            <tr key={course.name}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.category}</td>
              <td>{course.subject}</td>
              <td>{course.startTime}</td>
              <td>{course.endTime}</td>
              <td>{course.numStudents}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="my-3">
        {Array.from(
          { length: Math.ceil(filteredCourses.length / coursesPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default CourseList;
