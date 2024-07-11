import React from 'react';
import './sidebar.css'; // Import the CSS file

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Maintenance</li>
        <li>Corporate Maintenance</li>
        <li>Manage Corp User</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
