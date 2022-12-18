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
import { Course } from "../../types/Course";

interface Props {
  courses: Course[];
}

const CourseList: React.FC<Props> = ({ courses }) => {
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
        <Row>
          <Col>
            <FormControl
              type="text"
              placeholder="Search courses by name or time"
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary">Search</Button>
          </Col>
          <Col>
            <Button variant="primary" className="ms-auto">
              Add New Course
            </Button>
          </Col>
        </Row>
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
