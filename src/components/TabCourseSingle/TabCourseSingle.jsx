import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./TabCourseSingle.css";
import { Style } from "@mui/icons-material";

import Accordion from "react-bootstrap/Accordion";
import CommentsSection from "../CommentsSection/CommentsSection";

const TabCourseSingle = () => {
  return (
    <>
      <div className="MA-Tabs-Coures-single">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3 "
          fill
        >
          {/* <Tab eventKey="Overview" title="Overview"> */}
          <Tab eventKey="Overview" title="Overview">
            <div className="MA-TAB-overview-content">
              <p className="MA-TAB-overview-content1">
                LearnPress is a comprehensive WordPress LMS Plugin for
                WordPress. This is one of the best WordPress LMS Plugins which
                can be used to easily create & sell courses online. You can
                create a course curriculum with lessons & quizzes included which
                is managed with an easy-to-use interface for users. Having this
                WordPress LMS Plugin, now you have a chance to quickly and
                easily create education, online school, online-course websites
                with no coding knowledge required.
              </p>
              <p className="MA-TAB-overview-content2">
                LearnPress is free and always will be, but it is still a premium
                high-quality WordPress Plugin that definitely helps you with
                making money from your WordPress Based LMS. Just try and see how
                amazing it is. LearnPress WordPress Online Course plugin is
                lightweight and super powerful with lots of Add-Ons to empower
                its core system.How to use WPML Add-on for LearnPress? No
                comments yet! You be the first to comment.
              </p>
            </div>
          </Tab>
          <Tab eventKey="Curriculum" title="Curriculum">
            <div className="MA-tab-Curriculum">
              <p>
                LearnPress is a comprehensive WordPress LMS Plugin for
                WordPress. This is one of the best WordPress LMS Plugins which
                can be used to easily create & sell courses online.
              </p>
              <div className="MA-tab-Curriculum-content">
                <div className="MA-tab-Curriculum-content-Accordion1">
                  <div className="MA-Accordion1">
                    {
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item
                          eventKey="0"
                          style={{ margin: "10px 0" }}
                        >
                          <Accordion.Header>
                            <span>Lessons with video content</span>
                            {/* <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Lessons with video content</p> */}
                            <div className="MA-Accordion1-part2">
                              <span>5 Lessons</span>
                              <span>45 Mins</span>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="1"
                          style={{ margin: "10px 0" }}
                        >
                          <Accordion.Header>
                            <span>Lessons with video content</span>
                            {/* <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Lessons with video content</p> */}
                            <div className="MA-Accordion1-part2">
                              <span>5 Lessons</span>
                              <span>45 Mins</span>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div>a</div>
                            <div>b</div>
                            <div>c</div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="2"
                          style={{ margin: "10px 0" }}
                        >
                          <Accordion.Header>
                            <span>Lessons with video content</span>
                            {/* <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Lessons with video content</p> */}
                            <div className="MA-Accordion1-part2">
                              <span>5 Lessons</span>
                              <span>45 Mins</span>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="3"
                          style={{ margin: "10px 0" }}
                        >
                          <Accordion.Header>
                            <span>Lessons with video content</span>
                            {/* <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Lessons with video content</p> */}
                            <div className="MA-Accordion1-part2">
                              <span>5 Lessons</span>
                              <span>45 Mins</span>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                            <span>Lessons with video content</span>
                            {/* <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Lessons with video content</p> */}
                            <div className="MA-Accordion1-part2">
                              <span>5 Lessons</span>
                              <span>45 Mins</span>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    }
                  </div>
                </div>
                <div className="MA-tab-Curriculum-content-Accordion2"></div>
                <div className="MA-tab-Curriculum-content-Accordion3"></div>
                <div className="MA-tab-Curriculum-content-Accordion4"></div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Instructor" title="Instructor">
            <div className="MA-tab-Instructor">
              <div className="MA-tab-Instructor-part1">
                <img src="/imges/Frame 3871.png" alt="img" />
                <div className="info">
                  <h4
                    style={{
                      width: "99px",
                      height: "24px",
                      fontFamily: "EXO",
                      fontSize: "20px",
                      lineHeight: "24px",
                    }}
                  >
                    ThimPress
                  </h4>
                  <p>
                    LearnPress is a comprehensive WordPress LMS Plugin for
                    WordPress. This is one of the best WordPress LMS Plugins
                    which can be used to easily create & sell courses online.
                  </p>
                  <img
                    src="/imges/students icon.png"
                    alt="img"
                    style={{ width: "16px", height: "16px" }}
                  />
                  <span></span>
                  <span>156 Students</span>
                  <div>
                    <img
                      src="/imges/students icon.png"
                      alt="img"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span></span>
                    <span>156 Students</span>
                  </div>
                </div>
              </div>
              <div className="MA-tab-Instructor-part2">
                <p>
                  LearnPress is a comprehensive WordPress LMS Plugin for
                  WordPress. This is one of the best WordPress LMS Plugins which
                  can be used to easily create & sell courses online.
                </p>
              </div>
              <div className="MA-tab-Instructor-part3">
                <div className="social-media">
                  <span>Follow:</span>
                  <a href="#">
                    <img src="/imges/Icon.png" />
                  </a>
                  <a href="#">
                    <img src="/imges/Icon-1.png" />
                  </a>
                  <a href="#">
                    <img src="/imges/Icon-2.png" />
                  </a>
                  <a href="#">
                    <img src="/imges/Icon-3.png" />
                  </a>
                  <a href="#">
                    <img src="/imges/Icon-4.png" />
                  </a>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="FAQs" title="FAQs">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>
          <Tab eventKey="Reviews" title="Reviews" style={{height:"max-content"}}>
            <CommentsSection />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default TabCourseSingle;
