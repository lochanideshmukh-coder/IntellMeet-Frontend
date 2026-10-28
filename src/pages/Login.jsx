import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [show, setShow] = useState(false); const [error, setError] = useState("");
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email address.");
    if (password.length < 6) return setError("Password must contain at least 6 characters.");
    setError(""); onLogin(); navigate("/dashboard");
  }
  return <div className="auth-card"><p className="eyebrow">WELCOME BACK</p><h2>Sign in to your workspace</h2><p className="muted">Enter your details to continue to IntellMeet.</p><form onSubmit={submit} className="form-stack" noValidate>
    <label className="field-label">Work email<div className="input-wrap"><Mail size={17} /><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" /></div></label>
    <label className="field-label">Password<div className="input-wrap"><LockKeyhole size={17} /><input type={show ? "text" : "password"} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" /><button type="button" className="input-action" onClick={()=>setShow(!show)} aria-label="Show or hide password">{show ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></label>
    <div className="form-between"><label className="check-label"><input type="checkbox" /> Remember me</label><Link to="/forgot-password">Forgot password?</Link></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="primary-button full-button" type="submit">Sign in <ArrowRight size={17}/></button>
  </form><p className="auth-switch">New to IntellMeet? <Link to="/register">Create an account</Link></p><p className="demo-note">Demo only: any valid email and a password of 6+ characters will open the sample dashboard.</p></div>;
}