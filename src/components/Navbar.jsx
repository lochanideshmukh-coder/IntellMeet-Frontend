import { Bell, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { notifications } from "../data/mockData.js";

export default function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  return <header className="topbar">
    <div className="mobile-brand">Intell<span>Meet</span></div>
    <label className="search-box"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search meetings..." aria-label="Search meetings" /></label>
    <div className="topbar-actions">
      <div className="notification-wrap">
        <button className="icon-button" onClick={() => setOpen(!open)} aria-label="Toggle notifications"><Bell size={19} /><i /></button>
        {open && <div className="notification-popover"><div className="popover-title">Notifications <span>2 new</span></div>{notifications.map(n => <div className="notification-item" key={n.id}><b>{n.title}</b><p>{n.detail}</p><small>{n.time}</small></div>)}</div>}
      </div>
      <div className="user-chip"><div className="avatar">LD</div><div className="user-chip-text"><b>Lochani</b><small>Team member</small></div><ChevronDown size={15} /></div>
      <button className="text-button logout-button" onClick={onLogout}>Log out</button>
    </div>
  </header>;
}