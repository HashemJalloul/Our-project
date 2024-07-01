import './SidebarBlog.css'
import post1 from './../../../public/imges/post1.png'
import post2 from './../../../public/imges/post2.png'
import post3 from './../../../public/imges/post3.png'
export default function SidebarBlog() {
    return (
        <>

            <div className="ek-sidebar-blogs">
                <h4>Category</h4>
                <div className="ek-side-category">
                    <div className="ek-side-categoryone">
                        <p>Commercial</p>
                        <p>15</p>
                    </div>
                    <div className="ek-side-categoryone">
                        <p>Office</p>
                        <p>15</p>
                    </div>
                    <div className="ek-side-categoryone">
                        <p>Shop</p>
                        <p>15</p>
                    </div>
                    <div className="ek-side-categoryone">
                        <p>Educate</p>
                        <p>15</p>
                    </div>
                    <div className="ek-side-categoryone">
                        <p>Academy</p>
                        <p>15</p>
                    </div>
                    <div className="ek-side-categoryone">
                        <p>Single family home</p>
                        <p>15</p>
                    </div>
                </div>
                <div className="ek-side-2-category">
                    <h4>Recent Posts</h4>
                    <div className="side">
                        <div className="ek-side-category-Two">
                            <img src={post1} alt="" />
                            <a href="">Best LearnPress WordPress Theme Collection for 2023</a>
                        </div>
                        <div className="ek-side-category-Two">
                            <img src={post2} alt="" />
                            <a href="">Best LearnPress WordPress Theme Collection for 2023</a>
                        </div>
                        <div className="ek-side-category-Two">
                            <img src={post3} alt="" />
                            <a href="">Best LearnPress WordPress Theme Collection for 2023</a>
                        </div>
                    </div>
                </div>
                <div className="ek-side-3-category">
                    <h4>Tags</h4>
                    <div className="side-3">
                        <div className="free-c">
                            <p>Free couses</p>
                            <p>Marketing</p>
                        </div>
                        <div className="lms">
                            <p>Idea</p>
                            <p>LMS</p>
                        </div>
                        <div className="learn-press">
                            <p>LearnPress</p>
                            <p>Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
