import React from 'react';
const Sidebar = () => {
    return (
      <aside className="MA-courses-sidebar">
        <h2>Course Category</h2>
        <ul>
          <li><input type="checkbox" /> Commercial</li>
          <li><input type="checkbox" /> Office</li>
          <li><input type="checkbox" /> Education</li>
          {/* Add other categories similarly */}
        </ul>
        <h2>Instructors</h2>
        <ul>
          <li><input type="checkbox" /> Jenny Wilson</li>
          <li><input type="checkbox" /> John Doe</li>
          {/* Add other instructors similarly */}
        </ul>
        {/* Add other sections similarly */}
      </aside>
    );
  };
  
  export default Sidebar;