import { Card, Container } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs/BasicBreadcrumbs";
import "./CourseSingle.css";
import TabCourseSingle from "../../components/TabCourseSingle/TabCourseSingle";

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
                    <div className="MA-img-card">
                      <img
                        alt=""
                        variant="left"
                        src={course.image}
                        style={{ width: "291px", height: "250px" }}
                      />
                    </div>
                  </Card>
                ))}
              </Container>
            </div>
          </div>
          <div className="MA-CourseSingle-Detail">
            <TabCourseSingle />
            <div className="MA-TabCourseSingle-part2">

            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default CourseSingle;
