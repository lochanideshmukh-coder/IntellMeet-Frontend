import { CalendarDays, Clock3, MoreHorizontal, Video } from "lucide-react";
import { Link } from "react-router-dom";

export default function MeetingCard({ meeting }) {
  return <article className="meeting-card">
    <div className="meeting-card-top"><div className="meeting-symbol"><Video size={19} /></div><span className={`status status-${meeting.status.toLowerCase().replace(" ", "-")}`}>{meeting.status}</span><button className="subtle-icon" aria-label="More meeting options"><MoreHorizontal size={19} /></button></div>
    <h3>{meeting.title}</h3><p className="meeting-id">Meeting ID: {meeting.id}</p>
    <div className="meeting-meta"><span><CalendarDays size={15} />{meeting.date}</span><span><Clock3 size={15} />{meeting.time}</span></div>
    <div className="meeting-card-footer"><span>{meeting.duration}</span><Link to={meeting.status === "Upcoming" ? "/meetings/join" : "/meetings/history"} className="small-link">{meeting.status === "Upcoming" ? "Join meeting →" : "View details →"}</Link></div>
  </article>;
}