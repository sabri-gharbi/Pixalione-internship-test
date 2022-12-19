import React, { useState } from "react";
import { Form, Button, Table, Pagination, InputGroup } from "react-bootstrap";
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
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.startTime.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.endTime.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="d-flex justify-content-between mb-3">
        <Form.Group className="w-50">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search courses by name or time"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        {curUser && curUser.role === "instructor" && (
          <Button variant="primary" onClick={handleShowModal}>
            Add New Course
          </Button>
        )}
      </div>

      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th style={{ width: "15%" }}>Name</th>
            <th style={{ width: "10%" }}>Num Students</th>
            <th style={{ width: "15%" }}>Category</th>
            <th style={{ width: "15%" }}>Subject</th>
            <th style={{ width: "10%" }}>Start Time</th>
            <th style={{ width: "10%" }}>End Time</th>
            <th style={{ width: "25%" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCourses.map((course) => (
            <tr key={course.name}>
              <td>{course.name}</td>
              <td>{course.numStudents}</td>
              <td>{course.category}</td>
              <td>{course.subject}</td>
              <td>{course.startTime}</td>
              <td>{course.endTime}</td>
              <td>{course.description}</td>
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
