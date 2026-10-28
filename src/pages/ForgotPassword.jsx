import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
export default function ForgotPassword() {
  const [email, setEmail] = useState(""); const [message, setMessage] = useState("");
  function submit(e) { e.preventDefault(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setMessage("Please enter a valid email address."); setMessage("Demo only: password reset email is not sent until backend integration."); }
  return <div className="auth-card"><p className="eyebrow">ACCOUNT RECOVERY</p><h2>Forgot your password?</h2><p className="muted">Enter your email and we'll show you the next step.</p><form className="form-stack" onSubmit={submit}><label className="field-label">Work email<div className="input-wrap"><Mail size={17}/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com"/></div></label>{message && <p className={message.startsWith("Demo") ? "form-success" : "form-error"}>{message}</p>}<button className="primary-button full-button">Continue</button></form><Link className="back-link" to="/login"><ArrowLeft size={16}/> Back to sign in</Link></div>;
}