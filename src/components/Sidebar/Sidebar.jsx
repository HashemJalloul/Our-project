import "./Sidebar.css";
import stary from './../../../public/imges/stary.png'
import starg from './../../../public/imges/starg.png'
const Sidebar = () => {
  return (
    <div className="MA-courses-sidebar">
      
      <div className="MA-sidebar-course-category">
      <h4>Course Category</h4>
        <div className="MA-side-category">
          <div className="MA-side-1">
            <input type="checkbox" />
            <p>Commercial</p>
          </div>
          <p>15</p>
        </div>


        <div className="MA-side-category">
        <div className="MA-side-1">
          <input type="checkbox" /> 
          <p>Office</p>
        </div>
        <p>15</p>
        </div>



        <div className="MA-side-category">
        <div className="MA-side-1">
          <input type="checkbox" /> 
          <p>Shop</p>
        </div>
        <p>15</p>
        </div>


        <div className="MA-side-category">
        <div className="MA-side-1">
          <input type="checkbox" /> 
          <p>Education</p>
        </div>
        <p>15</p>
        </div>


        <div className="MA-side-category">
        <div className="MA-side-1">
          <input type="checkbox" /> 
          <p>Academy</p>
        </div>
        <p>15</p>
        </div>


        <div className="MA-side-category">
        <div className="MA-side-1">
          <input type="checkbox" /> 
          <p>Single family home</p>
        </div>
        <p>15</p>
        </div>


        <div className="MA-side-category">
        <div className="MA-side-1">
          <input type="checkbox" /> 
          <p>Studio</p>
        </div>
        <p>15</p>
        </div>


        <div className="MA-side-category">
        <div className="MA-side-1">
          <input type="checkbox" /> 
          <p>University</p>
        </div>
        <p>15</p>
        </div>
        </div>

      <div className="MA-sidebar-Instructors">
        <h4>Instructors</h4>

        <div className="MA-side-category">
          <div className="MA-side-1">
          <input type="checkbox" />
          <p>Jenny Wilson</p>
          </div>
          <p>15</p>
        </div>
        <div className="MA-side-category">
          <div className="MA-side-1">
          <input type="checkbox" />
          <p>John Doe</p>
          </div>
          <p>15</p>
        </div>
      </div>

      <div className="MA-sidebar-price">
        <h4>Price</h4>

        <div className="MA-side-category">
        <div className="MA-side-1">
        <input type="checkbox" /> 
        <p>All</p>
        </div>
        <p>15</p>
        </div>

        <div  className="MA-side-category">
         <div className="MA-side-1">
         <input type="checkbox" /> 
         <p>Free</p>
         </div>
         <p>15</p>
        </div>

        <div className="MA-side-category">
         <div className="MA-side-1">
         <input type="checkbox" />
         <p>Paid</p>
         </div>
         <p>15</p>
        </div>
      </div>

      <div className="MA-sidebar-Review">
        <h4>Review</h4>
        <div className="MA-side-category">
         <div className="MA-side-1-star">
         <input type="checkbox" /> 
         <div className="star">
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         </div>
         </div>
          <p>(1,025)</p>
        </div>
        <div className="MA-side-category">
         <div className="MA-side-1-star">
         <input type="checkbox" /> 
         <div className="star">
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={starg} alt="" />
         </div>
         </div>
          <p>(1,025)</p>
        </div>
        <div className="MA-side-category">
         <div className="MA-side-1-star">
         <input type="checkbox" /> 
         <div className="star">
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={starg} alt="" />
         <img src={starg} alt="" />
         </div>
         </div>
          <p>(1,025)</p>
        </div>
        <div className="MA-side-category">
         <div className="MA-side-1-star">
         <input type="checkbox" /> 
        <div className="star">
        <img src={stary} alt="" />
         <img src={stary} alt="" />
         <img src={starg} alt="" />
         <img src={starg} alt="" />
         <img src={starg} alt="" />
        </div>
         </div>
          <p>(1,025)</p>
        </div>
        <div className="MA-side-category">
         <div className="MA-side-1-star">
         <input type="checkbox" /> 
         <div className="star">
         <img src={stary} alt="" />
         <img src={starg} alt="" />
         <img src={starg} alt="" />
         <img src={starg} alt="" />
         <img src={starg} alt="" />
         </div>
         </div>
          <p>(1,025)</p>
        </div>
        
      </div>

      <div className="MA-sidebar-Level">
        <h4>Level</h4>

        <div className="MA-side-category">
         <div className="MA-side-1">
         <input type="checkbox" />
         <p>All levels</p>
         </div>
         <p>15</p>
        </div>
        <label htmlFor="" className="MA-side-category">
         <div className="MA-side-1">
         <input type="checkbox" />
         <p>Beginner</p>
         </div>
         <p>15</p>
        </label>
        <div className="MA-side-category">
         <div className="MA-side-1">
         <input type="checkbox" />
         <p>Intermidiate</p>
         </div>
         <p>15</p>
        </div>
        <div className="MA-side-category">
         <div className="MA-side-1">
         <input type="checkbox" />
         <p>Expert</p>
         </div>
         <p>15</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
