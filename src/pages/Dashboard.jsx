import { CalendarDays, Clock3, Video, Users, CheckCircle2, Plus, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SummaryCard from "../components/SummaryCard.jsx";
import MeetingCard from "../components/MeetingCard.jsx";

export default function Dashboard({ meetings }) {
  const upcoming = meetings.filter(m => m.status === "Upcoming");
  const completed = meetings.filter(m => m.status === "Completed");
  return <div className="dashboard-page">
    <section className="welcome-banner"><div><span className="welcome-tag"><Sparkles size={14}/> YOUR TEAM, IN SYNC</span><h2>Good to see you, Lochani <span>✦</span></h2><p>Make space for great ideas. Your next conversation starts here.</p><div className="welcome-actions"><Link className="button-light" to="/meetings/create"><Plus size={17}/> Create meeting</Link><Link className="button-ghost" to="/meetings/join"><Video size={17}/> Join a meeting</Link></div></div><div className="banner-orbit"><div className="orbit-circle orbit-one"></div><div className="orbit-circle orbit-two"></div><div className="orbit-center"><Video size={30}/></div></div></section>
    <section className="summary-grid"><SummaryCard label="Total meetings" value={meetings.length + 21} note="Across your workspace" icon={Video} tone="blue"/><SummaryCard label="Upcoming" value={upcoming.length} note="Ready when you are" icon={CalendarDays} tone="purple"/><SummaryCard label="Completed" value={completed.length + 19} note="Meetings wrapped up" icon={CheckCircle2} tone="green"/><SummaryCard label="Team members" value="08" note="In your workspace" icon={Users} tone="orange"/></section>
    <section className="section-heading"><div><h2>Upcoming meetings</h2><p>Your next conversations at a glance.</p></div><Link to="/meetings" className="view-all">View all <ArrowUpRight size={16}/></Link></section>
    {upcoming.length ? <div className="meeting-grid">{upcoming.slice(0,3).map(m=><MeetingCard key={m.id} meeting={m}/>)}</div> : <div className="empty-state"><CalendarDays/><h3>No upcoming meetings</h3><p>Create a meeting to get started.</p><Link to="/meetings/create" className="primary-button">Create meeting</Link></div>}
    <section className="tip-banner"><div className="tip-icon"><Clock3 size={20}/></div><div><b>Make every meeting count</b><p>Set an agenda before you meet to help your team stay focused.</p></div><span className="coming-soon">AI ASSISTANCE · COMING SOON</span></section>
  </div>;
}