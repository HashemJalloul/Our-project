/* eslint-disable react/prop-types */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './BasicBreadcrumbs.css'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs(props) {
  
  return (
    <div role="presentation" onClick={handleClick} className='MA-BasicBreadcrumbs' >
      <Breadcrumbs separator=">" aria-label="breadcrumb" className='MA-breadcrumb'  >
        <Link style={{color:"#555555",width:"76px",height:"24px",fontWeight:"400",fontSize:"16px",lineHeight:"24px"}} underline="hover"  color="inherit" href="/">
         HomePage 
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/Course"
          to="/Courses"
          style={{color:"#555555"}}
        >
          {props.name}
        </Link>
        <Typography className='type' color="text.primary">{props.type}</Typography>
      </Breadcrumbs>
    </div>
  );
}