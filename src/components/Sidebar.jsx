import { NavLink } from "react-router-dom";
import { Video, LayoutDashboard, CalendarDays, PlusCircle, Link2, History, UserRound, Sparkles } from "lucide-react";

const links = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/meetings", label: "All meetings", icon: CalendarDays },
  { to: "/meetings/create", label: "Create meeting", icon: PlusCircle },
  { to: "/meetings/join", label: "Join meeting", icon: Link2 },
  { to: "/meetings/history", label: "Meeting history", icon: History },
  { to: "/profile", label: "My profile", icon: UserRound }
];

export default function Sidebar() {
  return <aside className="sidebar">
    <NavLink to="/dashboard" className="brand"><span className="brand-icon"><Video size={20} /></span><span>Intell<span>Meet</span><small>WORKSPACE</small></span></NavLink>
    <div className="nav-label">WORKSPACE</div>
    <nav>{links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}><Icon size={18} /><span>{label}</span></NavLink>)}</nav>
    <div className="sidebar-bottom"><div className="ai-badge"><Sparkles size={18} /><div><b>Meet smarter</b><p>AI features coming soon</p></div></div><div className="sidebar-foot">IntellMeet · Frontend demo</div></div>
  </aside>;
}