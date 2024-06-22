import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./TabCourseSingle.css";

const TabCourseSingle = () => {
  return (
    <>
      <div className="MA-Tabs-Coures-single">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
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
            Tab content for Curriculum
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
