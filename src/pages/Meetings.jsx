import { useMemo, useState } from "react";
import { Search, Plus, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import MeetingCard from "../components/MeetingCard.jsx";

export default function Meetings({ meetings }) {
  const [query, setQuery] = useState(""); const [status, setStatus] = useState("All");
  const filtered = useMemo(() => meetings.filter(m => (status === "All" || m.status === status) && `${m.title} ${m.id}`.toLowerCase().includes(query.toLowerCase())), [meetings, query, status]);
  return <><div className="toolbar"><label className="search-box list-search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by title or meeting ID"/></label><select className="select-control" value={status} onChange={e=>setStatus(e.target.value)} aria-label="Filter meeting status"><option>All</option><option>Upcoming</option><option>Completed</option><option>Cancelled</option></select><Link className="primary-button" to="/meetings/create"><Plus size={17}/> Create meeting</Link></div>
  {filtered.length ? <div className="meeting-grid">{filtered.map(m=><MeetingCard key={m.id} meeting={m}/>)}</div> : <div className="empty-state"><CalendarDays/><h3>No meetings found</h3><p>Try changing your search or status filter.</p><button className="secondary-button" onClick={()=>{setQuery("");setStatus("All");}}>Clear filters</button></div>}</>;
}