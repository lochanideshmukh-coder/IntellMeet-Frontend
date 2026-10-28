import { useState } from "react";
import { Link } from "react-router-dom";
import { Video, Link2, ArrowRight } from "lucide-react";
export default function JoinMeeting() {
  const [meetingId, setMeetingId] = useState(""); const [message, setMessage] = useState("");
  function submit(e) { e.preventDefault(); if (meetingId.trim().length < 4) return setMessage("Enter a valid-looking meeting ID or link."); setMessage("Input accepted for demo. Real meeting joining needs the meeting service integration."); }
  return <div className="form-panel narrow-panel"><div className="join-illustration"><div><Video size={32}/></div></div><div className="center-intro"><h2>Join a meeting</h2><p>Enter the meeting ID or paste an invitation link.</p></div><form className="form-stack" onSubmit={submit}><label className="field-label">Meeting ID or link<div className="input-wrap"><Link2 size={17}/><input value={meetingId} onChange={e=>setMeetingId(e.target.value)} placeholder="e.g. IM-2041 or meeting link"/></div></label>{message && <p className={message.startsWith("Input") ? "form-success" : "form-error"}>{message}</p>}<button className="primary-button full-button">Continue <ArrowRight size={17}/></button></form><p className="demo-note center-note">This demo does not connect to a live video room.</p><Link to="/meetings" className="back-link center-note">Browse meetings</Link></div>;
}