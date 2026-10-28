import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

const titles = { "/dashboard": "Overview", "/meetings": "All meetings", "/meetings/create": "Create a meeting", "/meetings/join": "Join a meeting", "/meetings/history": "Meeting history", "/profile": "My profile" };
export default function DashboardLayout({ onLogout }) {
  const location = useLocation();
  return <div className="app-shell"><Sidebar /><div className="main-column"><Navbar onLogout={onLogout} /><main className="page-content"><div className="page-heading"><div><p className="eyebrow">YOUR WORKSPACE</p><h1>{titles[location.pathname] || "Workspace"}</h1></div><span className="demo-pill">DEMO DATA</span></div><Outlet /></main></div></div>;
}