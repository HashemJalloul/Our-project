import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="MA-courses-sidebar">
      <div className="MA-sidebar-course-category">
        <h4>Course Category</h4>

        <label style={{width:"212px",backgroundColor:"GrayText"}} htmlFor="">
          <input type="checkbox" />{" "}
          <p style={{ display: "inline" }}>Commercial</p>
          <p style={{display:"inline",justifyContent:"flex-end"}}>15</p>
        </label>

        <label htmlFor="">
          <input type="checkbox" /> <p style={{ display: "inline" }}>Office</p>
        </label>

        <label htmlFor="">
          <input type="checkbox" />
          <p style={{ display: "inline" }}>Shop</p>
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          <p style={{ display: "inline" }}>Education</p>
        </label>

        <label htmlFor="">
          <input type="checkbox" /> <p style={{ display: "inline" }}>Academy</p>
        </label>

        <label htmlFor="">
          <input type="checkbox" />
          <p style={{ display: "inline" }}>Single family home</p>
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          <p style={{ display: "inline" }}>Studio</p>
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          <p style={{ display: "inline" }}>University</p>
        </label>
      </div>

      <div className="MA-sidebar-Instructors">
        <h4>Instructors</h4>

        <label htmlFor="">
          <input type="checkbox" />{" "}
          <p style={{ display: "inline" }}>Jenny Wilson</p>
        </label>
        <label htmlFor="">
          <input type="checkbox" />{" "}
          <p style={{ display: "inline" }}>John Doe</p>
        </label>
      </div>

      <div className="MA-sidebar-price">
        <h4>Price</h4>

        <label htmlFor="">
          <input type="checkbox" /> <p style={{ display: "inline" }}></p>All
        </label>

        <label htmlFor="">
          <input type="checkbox" /> <p style={{ display: "inline" }}>Free</p>
        </label>

        <label htmlFor="">
          <input type="checkbox" /> <p style={{ display: "inline" }}></p>Paid
        </label>
      </div>

      <div className="MA-sidebar-Review">
        <h4>Review</h4>
        <label htmlFor="">
          <input type="checkbox" /> <p>All</p>
        </label>
        <label htmlFor="">
          <input type="checkbox" /> <p>Free</p>
        </label>
        <label htmlFor="">
          <input type="checkbox" /> <p>Paid</p>
        </label>
      </div>

      <div className="MA-sidebar-Level">
        <h4>Level</h4>
        <label htmlFor=""><input type="checkbox" />
        <p>All</p></label> 
        <label htmlFor="">
          <input type="checkbox" /> <p>Free</p>
        </label>
        <label htmlFor="">
          <input type="checkbox" /> <p>Paid</p>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
