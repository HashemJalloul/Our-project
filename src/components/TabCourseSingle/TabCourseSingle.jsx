import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./TabCourseSingle.css";
import { Style } from "@mui/icons-material";

import Accordion from "react-bootstrap/Accordion";

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
                        <Accordion.Item eventKey="0" style={{margin:"10px 0"}}>
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
                        <Accordion.Item eventKey="1" style={{margin:"10px 0"}}>
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
                        <Accordion.Item eventKey="2" style={{margin:"10px 0"}}>
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
                        <Accordion.Item eventKey="3" style={{margin:"10px 0"}}>
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
            Tab content for Instructor
          </Tab>
          <Tab eventKey="FAQs" title="FAQs">
            Tab content for FAQs
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            Tab content for Reviews
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default TabCourseSingle;
