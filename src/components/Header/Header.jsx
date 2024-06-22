import React from "react";
import  {FaSearch}  from 'react-icons/fa';
export default function Header() {
  return (
    <div>
      <header>
        <h1>All Courses</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>
      </header>
    </div>
  );
}
