import './BlogSingle.css'
import BasicBreadcrumbs from '../../components/BasicBreadcrumbs/BasicBreadcrumbs'
import SidebarBlog from '../../components/SidebarBlog/SidebarBlog'
import person from './../../../public/imges/person.png'
import date from './../../../public/imges/date.png'
import article2 from './../../../public/imges/article2.png'
import comment from './../../../public/imges/comment.png'
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
            <img src={article2} alt="" />
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
              <div className='social-media'>
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
        </div>
       
        <div>
          <SidebarBlog/>
        </div>
      </section>
    </>

  )
}
