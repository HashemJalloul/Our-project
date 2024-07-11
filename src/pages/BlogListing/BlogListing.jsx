import Card from 'react-bootstrap/Card'
import article1 from './../../../public/imges/Article1.png'
import article2 from './../../../public/imges/article2.png'
import article3 from './../../../public/imges/Article3.png'
import article4 from './../../../public/imges/Rectangle 139-4.png'
import article5 from './../../../public/imges/Rectangle 139-1.png'
import article6 from './../../../public/imges/Rectangle 139.png'
import searchicon from './../../../public/imges/searchinput2.png'
import view from './../../../public/imges/view.png'
import list from './../../../public/imges/list.png'
import SidebarBlog from '../../components/SidebarBlog/SidebarBlog'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BasicBreadcrumbs from './../../components/BasicBreadcrumbs/BasicBreadcrumbs'
import { Link } from 'react-router-dom'
import './BlogListing.css'
export default function BlogListing() {
  return (
    <>
      <section className="ek-BlogListing">
        <BasicBreadcrumbs name="Blog"/>
      </section>
      <section className="ek-Blogs">
        <div className="ek-blogs-partone">
          <div className="ek-top-blogs">
            <h1 className="ek-title-blogs-h1">All Articles</h1>
            <div className='searchinput'>
              <input type="text" placeholder='Search' />
              <img className='searchIcon' src={searchicon} alt="" />
              <img src={view} alt="" />
              <img src={list} alt="" />
            </div>
          </div>
          <div className='eK-LatestArticles-cards'>
              <Link to="/BlogSingle">  <Card className='eK-LatestArticles-card' >
                    <Card.Img variant="top" src={article1} className='SK-Card-Image'/>
                    <Card.Body className='eK-CardArticle-Body'>
                        <Card.Title className='eK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='eK-CardArticle-Date'>
                            <img src="./../../../public/imges/date.png" alt="Date Icon" />
                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card></Link>

                <Link to="/BlogSingle">
                <Card className='eK-LatestArticles-card'>
                    <Card.Img variant="top" src={article2} className='SK-Card-Image'/>
                    <Card.Body className='eK-CardArticle-Body'>
                        <Card.Title className='eK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='eK-CardArticle-Date'>
                            <img src="./../../../public/imges/date.png" alt="Date Icon" />
                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card>
                </Link>
             <Link to="/BlogSingle">
             <Card className='eK-LatestArticles-card'>
                    <Card.Img variant="top" src={article3} className='eK-Card-Image'/>
                    <Card.Body className='eK-CardArticle-Body'>
                        <Card.Title className='eK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='eK-CardArticle-Date'>
                            <img src="./../../../public/imges/date.png" alt="Date Icon" />
                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card>
             </Link>
              <Link to="/BlogSingle">  <Card className='eK-LatestArticles-card'>
                    <Card.Img variant="top" src={article6} className='SK-Card-Image'/>
                    <Card.Body className='eK-CardArticle-Body'>
                        <Card.Title className='eK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='eK-CardArticle-Date'>
                            <img src="./../../../public/imges/date.png" alt="Date Icon" />
                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card></Link>
                <Link to="/BlogSingle"><Card className='eK-LatestArticles-card'>
                    <Card.Img variant="top" src={article5} className='SK-Card-Image'/>
                    <Card.Body className='eK-CardArticle-Body'>
                        <Card.Title className='eK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='eK-CardArticle-Date'>
                            <img src="./../../../public/imges/date.png" alt="Date Icon" />
                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card></Link>
               <Link to="/BlogSingle"> <Card className='eK-LatestArticles-card'>
                    <Card.Img variant="top" src={article4} className='SK-Card-Image'/>
                    <Card.Body className='eK-CardArticle-Body'>
                        <Card.Title className='eK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='eK-CardArticle-Date'>
                            <img src="./../../../public/imges/date.png" alt="Date Icon" />
                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card></Link>
            </div>
            <div className="MA-pagination-courses">
            <Stack spacing={2}>
              <Pagination count={3} size="large" variant="outlined" />
            </Stack>
          </div>
        </div>
        <div className="ek-sidebar">
          <SidebarBlog/>
        </div>
      </section>
    </>


  )
}
