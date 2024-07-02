import './BlogSingle.css'
import BasicBreadcrumbs from '../../components/BasicBreadcrumbs/BasicBreadcrumbs'
import SidebarBlog from '../../components/SidebarBlog/SidebarBlog'
import person from './../../../public/imges/person.png'
import date from './../../../public/imges/date.png'
import article2 from './../../../public/imges/article2.png'
import comment from './../../../public/imges/comment.png'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function BlogSingle() {
  return (
    <>
      <div>
        <BasicBreadcrumbs name="Blog" type="Best LearnPress WordPress theme collection for 2023" />
      </div>
      <section className='ek-blogSingle'>
        <div className='ek-learnPressCard'>
          <h1 className='learnPress-h1'>Best LearnPress WordPress Theme Collection for 2023</h1>
          <div className="ek-details">
            <div className="ek-details-content">
              <img src={person} alt="" />
              <span>Determined-poitras</span>
            </div>
            <div className="ek-details-content">
              <img src={date} alt="" />
              <span>Jan 24, 22023</span>
            </div>
            <div className="ek-details-content">
              <img src={comment} alt="" />
              <span>20 Comments</span>
            </div>
          </div>
          <div className="ek-learn-card">
            <img className='articlephoto' src={article2} alt="" />
            <div className="ek-learn-card-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus.</p>
            </div>
            <div className="ek-tags">
              <p>Tags:</p>
              <div className="ek-tags-2">
                <p>Free couses</p>
                <p>Marketing</p>
                <p>Idea</p>
                <p>LMS</p>
                <p>LearnPress</p>
                <p>Instructor</p>
              </div>
            </div>
            <div className="share">
              <p>Share:</p>
              <div className='ek-social-media-blogsingle'>
                <a href="#"><img src='./../../../public/imges/Icon.png' /></a>
                <a href="#"><img src='./../../../public/imges/Icon-1.png' /></a>
                <a href="#"><img src='./../../../public/imges/Icon-2.png' /></a>
                <a href="#"><img src='./../../../public/imges/Icon-3.png' /></a>
                <a href="#"><img src='./../../../public/imges/Icon-4.png' /></a>
              </div>
            </div>
          </div>
          <div className="pagination">
            <div className="pagination-item">
              <div className="pagination-img">
                <img src="./../../../public/imges/prev1.svg" alt="" />
              </div>
              <div className="pagination-content">
                <p>Prev Articles</p>
                <h4>Best LearnPress WordPress Theme Collection for 2023</h4>
              </div>
            </div>
            <div className="pagination-item">
              <div className="pagination-content">
                <p className='right'>Prev Articles</p>
                <h4>Best LearnPress WordPress Theme Collection for 2023</h4>
              </div>
              <div className="pagination-img">
                <img src="./../../../public/imges/prev2.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="comments-section">
            <h4 className='title-comment'>Comments</h4>
            <p>20 Comments</p>
            <hr />
            <div className="comment-box">
              <div className="comment-box-one">
                <img className='girl' src="./../../../public/imges/girl.png" />
                <div className="commment-content">
                  <div className="person-comment">
                    <h5>Laura Hipster</h5>
                    <p>October 03, 2022</p>
                  </div>
                  <p className='ek-comment'>Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.</p>
                  <div className="reply">
                    <img src="./../../../public/imges/Group.svg" alt="" />
                    <span>Reply</span>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="comment-box-one special">
                <img className='girl' src="./../../../public/imges/girl.png" />
                <div className="commment-content">
                  <div className="person-comment">
                    <h5>Laura Hipster</h5>
                    <p>October 03, 2022</p>
                  </div>
                  <p className='ek-comment'>Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.</p>
                  <div className="reply">
                    <img src="./../../../public/imges/Group.svg" alt="" />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="comment-box-one">
                <img className='girl' src="./../../../public/imges/girl.png" />
                <div className="commment-content">
                  <div className="person-comment">
                    <h5>Laura Hipster</h5>
                    <p>October 03, 2022</p>
                  </div>
                  <p className='ek-comment'>Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.</p>
                  <div className="reply">
                    <img src="./../../../public/imges/Group.svg" alt="" />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ek-pagination-comment">
              <Stack spacing={2}>
                <Pagination count={3} size="large" variant="outlined" />
              </Stack>
            </div>
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
              <div><input type="checkbox" />
                <label style={{ marginLeft: "10px", margin: "20px 0", color: "#555555" }} htmlFor="">
                  Save my name, email in this brower for the next time I comment
                </label></div>
              <button style={{ display: "block", width: "170px", height: "48px", backgroundColor: "#FF782D", color: "white", padding: "10px 24px 10px 24px", borderRadius: "24px", border: "0" }}>Posts comment</button>
            </div>
          </div>
        </div>

        <div className='ek-sidebar-single'>
          <SidebarBlog />
        </div>
      </section>
    </>

  )
}
