import Sidebar from "../components/sidebar/sidebar";

export default function DashboardLayout({ children })
 {
    return( <div>
      <div><Sidebar/></div>
      <div>{children}</div>
      
    </div>
    
    )
    
  }