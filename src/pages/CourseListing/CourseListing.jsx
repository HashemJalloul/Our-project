import BasicBreadcrumbs from './../../components/BasicBreadcrumbs/BasicBreadcrumbs'
import './CourseListing.css'
import Courses from './../../components/Courses/Courses'
import searchicon from './../../../public/imges/searchinput2.png'
import view from './../../../public/imges/view.png'
import list from './../../../public/imges/list.png'
import Sidebar from '../../components/Sidebar/Sidebar'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function CourseListing() {

  return (
    <>
      <section className="MA-CourseListing">
        <BasicBreadcrumbs name="Course"/>
      </section>
      <section className="MA-Cousres">
        <div className="MA-courses-partone">
          <div className="MA-top-courses">
            <h1 className="MA-title-courses-h1">All Courses</h1>
            <div className='searchinput'>
              <input type="text" placeholder='Search' />
              <img className='searchIcon' src={searchicon} alt="" />
              <img src={view} alt="" />
              <img src={list} alt="" />
            </div>
          </div>
            <Courses />
            <div className="MA-pagination-courses">
            <Stack spacing={2}>
              <Pagination count={3} size="large" variant="outlined" />
            </Stack>
          </div>
        </div>
        <div className="MA-sidebar">
          <Sidebar/>
        </div>
      </section>
    </>
  );
}

