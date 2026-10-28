import { Outlet } from "react-router-dom";
import { Video, Sparkles, Users, ShieldCheck } from "lucide-react";

export default function AuthLayout() {
  return <main className="auth-shell">
    <section className="auth-art"><div className="auth-brand"><span className="brand-icon"><Video size={21} /></span>Intell<span>Meet</span></div><div className="auth-art-content"><span className="eyebrow"><Sparkles size={14} /> THE FUTURE OF TEAMWORK</span><h1>Great ideas happen when teams <em>connect.</em></h1><p>One workspace for your meetings, collaboration, and the next big idea.</p><div className="auth-feature"><span><Users size={18} /></span><div><b>Bring everyone together</b><small>A calmer place for team conversations.</small></div></div><div className="auth-feature"><span><ShieldCheck size={18} /></span><div><b>Designed for focused work</b><small>Simple tools for productive meetings.</small></div></div></div><div className="auth-art-foot">A frontend demonstration for IntellMeet.</div></section>
    <section className="auth-form-side"><Outlet /></section>
  </main>;
}