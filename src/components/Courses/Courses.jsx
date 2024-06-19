import React from "react";
import "./Courses.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Card, Container } from "react-bootstrap";

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: "./imges/Image.png",
      author: "by Determined-Poitras",
      title: "Create an LMS Website with LearnPress",
      duration: "2 Weeks",
      students: "200 Students",
      level: "Intermediate",
      lessons: "12 Lessons",
      price: "$29.0",
      link: "#",
    },
    {
      id: 2,
      image: "./imges/Image (1).png",
      author: "by Determined-Poitras",
      title: "Create an LMS Website with LearnPress",
      duration: "2 Weeks",
      students: "200 Students",
      level: "Intermediate",
      lessons: "12 Lessons",
      price: "$29.0",
      link: "#",
    },
    {
      id: 3,
      image: "./imges/Image (3).png",
      author: "by Determined-Poitras",
      title: "Create an LMS Website with LearnPress",
      duration: "2 Weeks",
      students: "200 Students",
      level: "Intermediate",
      lessons: "12 Lessons",
      price: "$29.0",
      link: "#",
    },
    {
      id: 4,
      image: "./imges/Image (6).png",
      author: "by Determined-Poitras",
      title: "Create an LMS Website with LearnPress",
      duration: "2 Weeks",
      students: "200 Students",
      level: "Intermediate",
      lessons: "12 Lessons",
      price: "$29.0",
      link: "#",
    },
    {
      id: 5,
      image: "./imges/Image (5).png",
      author: "by Determined-Poitras",
      title: "Create an LMS Website with LearnPress",
      duration: "2 Weeks",
      students: "200 Students",
      level: "Intermediate",
      lessons: "12 Lessons",
      price: "$29.0",
      link: "#",
    },
    {
      id: 6,
      image: "./imges/Image (4).png",
      author: "by Determined-Poitras",
      title: "Create an LMS Website with LearnPress",
      duration: "2 Weeks",
      students: "200 Students",
      level: "Intermediate",
      lessons: "12 Lessons",
      price: "$29.0",
      link: "#",
    },
    // Add more course objects here
  ];
  return (
    <>
      <div className="MA-Cousres">
        <div className="MA-top-courses">
          <h1 className="MA-title-courses-h1">All Courses</h1>
          {/* يوجد زر البحث */}
        </div>
        <div className="MA-courses-cards">
          {/* cards start */}
          <Container>
            {courses.map((course) => (
              <Card
                key={course.id}
                className="mb-3 MA-card"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "none",
                }}
              >
                <div className="MA-img-card">
                  <img
                    alt=""
                    variant="left"
                    src={course.image}
                    style={{ width: "291px", height: "auto" }}
                  />
                </div>

                <div className="MA-card-left">
                  <p className="MA-card-title">{course.author}</p>
                  <h4 className="MA-card-body-h4">{course.title}</h4>
                  <div className="MA-card-icons">
                    <div>
                      <img src="./imges/clock icon.png" alt="" />
                      <p>{course.duration}</p>
                    </div>
                    <div>
                      <img src="./imges/students icon.png" alt="" />
                      <p>{course.students}</p>
                    </div>
                    <div>
                      <img src="./imges/levels icon.png" alt="" />
                      <p>{course.level}</p>
                    </div>
                    <div>
                      <img src="./imges/lessons icon.png" alt="" />
                      <p>{course.lessons}</p>
                    </div>
                  </div>

                  <div className="MA-footer-card">
                    <span>
                      <p
                        style={{
                          width: "46px",
                          height: "27px",
                          fontFamily: "Jost",
                          fontWeight: 400,
                          fontSize: "18px",
                          color: "#9D9D9D",
                        }}
                      >
                        {course.price}
                      </p>
                      <a href={course.link}>Free</a>
                    </span>
                    <span className="MA-card-footer-view">
                      <a href={course.link}>View more</a>
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </Container>
          {/* cards End */}

          <div className="MA-pagination-courses">
            <Stack spacing={2}>
              <Pagination count={3} />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;
