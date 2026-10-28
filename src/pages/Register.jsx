import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Mail, LockKeyhole, ArrowRight } from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [message, setMessage] = useState(""); const navigate = useNavigate();
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim()) return setMessage("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setMessage("Please enter a valid email address.");
    if (form.password.length < 6) return setMessage("Password must contain at least 6 characters.");
    if (form.password !== form.confirm) return setMessage("Passwords do not match.");
    setMessage("Demo registration validated. Connect the backend to create a real account."); 
  }
  return <div className="auth-card"><p className="eyebrow">GET STARTED</p><h2>Create your account</h2><p className="muted">Start bringing your team together.</p><form className="form-stack" onSubmit={submit}>
    <label className="field-label">Full name<div className="input-wrap"><UserRound size={17}/><input name="name" value={form.name} onChange={update} placeholder="Your full name"/></div></label>
    <label className="field-label">Work email<div className="input-wrap"><Mail size={17}/><input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com"/></div></label>
    <label className="field-label">Password<div className="input-wrap"><LockKeyhole size={17}/><input name="password" type="password" value={form.password} onChange={update} placeholder="At least 6 characters"/></div></label>
    <label className="field-label">Confirm password<div className="input-wrap"><LockKeyhole size={17}/><input name="confirm" type="password" value={form.confirm} onChange={update} placeholder="Re-enter password"/></div></label>
    {message && <p className={message.startsWith("Demo") ? "form-success" : "form-error"} role="status">{message}</p>}
    <button className="primary-button full-button" type="submit">Create account <ArrowRight size={17}/></button>
  </form><p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p><p className="demo-note">This screen does not create a real account until backend integration.</p></div>;
}