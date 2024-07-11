"use client"
import React, { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import './dashboardLayout.css'; 

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`dashboard-layout ${isCollapsed ? 'collapsed' : ''}`}>
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="content">
        {children}
      </div>
    </div>
  );
}
