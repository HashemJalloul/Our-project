import { Card, Container } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs/BasicBreadcrumbs";
import "./CourseSingle.css";
import TabCourseSingle from "../../components/TabCourseSingle/TabCourseSingle";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CourseSingle = () => {
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
  ];
  return (
    <>
      <div>
        <BasicBreadcrumbs />
        <div className="MA-CourseSingle">
          <div className="MA-CourseSingle-Hero">
            <div className="MA-CourseSingle-Hero-details">
              <div className="MA-CourseSingle-hero-top">
                <div className="MA-CourseSingle-hero-paragraph">
                  Photography
                </div>
                <div className="MA-CourseSingle-hero-text">
                  <span>by</span> <span>Determined-Poitras</span>
                </div>
              </div>
              <h1>The Ultimate Guide to the best WordPress LMS Plugin</h1>
              <div className="MA-CourseSingle-hero-icons">
                <div>
                  <img src="./imges/clock icon.png" alt="" />
                  <p>2 Weeks</p>
                </div>
                <div>
                  <img src="./imges/students icon.png" alt="" />
                  <p>200 Students</p>
                </div>
                <div>
                  <img src="./imges/levels icon.png" alt="" />
                  <p>Intermediate</p>
                </div>
                <div>
                  <img src="./imges/lessons icon.png" alt="" />
                  <p>12 Lessons</p>
                </div>
              </div>
            </div>
            <div className="MA-CourseSingle-Hero-card">
              <img src="/imges/Image-6.png" alt="img" />
              <div className="MA-CourseSingle-Hero-card-part2">
                <div className="MA-CourseSingle-Hero-card-part2-price">
                  <span style={{}}>$59.0</span>
                  <h4 style={{display:"inline-block",color:"#F51A1A",marginLeft:"15px"}}>$49.0</h4>
                </div>
                <button>Start now</button>
              </div>
            </div>
          </div>

          <div className="MA-CourseSingle-Detail">
            <TabCourseSingle />
            <div className="MA-TabCourseSingle-part2">
              <h4>Leave a comment</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <InputGroup className="mb-3 MA-course-single-form">
                <Form.Control
                  aria-label="Name"
                  placeholder="Name *"
                  className="mb-3 MA-course-single-form-input1"
                />
                <Form.Control
                  aria-label="Email"
                  placeholder="Email *"
                  className="mb-3 MA-course-single-form-input2"
                />
              </InputGroup>
              <textarea
                className="MA-course-single-form-comments"
                placeholder="comments"
              ></textarea>
              <input type="checkbox" />
              <label style={{ marginLeft: "10px" ,margin:"20px 0" }} htmlFor="">
                Save my name, email in this brower for the next time I comment
              </label>
              <button style={{display:"block",width:"170px",height:"48px", backgroundColor:"#FF782D",color:"white",padding:"10px 24px 10px 24px",borderRadius:"24px"}}>Posts comment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseSingle;
