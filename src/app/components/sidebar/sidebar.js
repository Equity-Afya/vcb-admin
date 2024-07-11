"use client"
import React from 'react';
import './sidebar.css'; 

function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isCollapsed ? '>' : '<'}
      </button>
      <ul>
        <li><span className="icon">🔧</span><span className="text">Maintenance</span></li>
        <li><span className="icon">🏢</span><span className="text">Corporate Maintenance</span></li>
        <li><span className="icon">👤</span><span className="text">Manage Corp User</span></li>
        <li><span className="icon">📊</span><span className="text">Reports</span></li>
        <li><span className="icon">⚙️</span><span className="text">Settings</span></li>
      </ul>
    </div>
  );
}

export default Sidebar;
