import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "./layouts/AuthLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Meetings from "./pages/Meetings.jsx";
import CreateMeeting from "./pages/CreateMeeting.jsx";
import JoinMeeting from "./pages/JoinMeeting.jsx";
import MeetingHistory from "./pages/MeetingHistory.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const [signedIn, setSignedIn] = useState(() => sessionStorage.getItem("intellmeet-demo-user") === "yes");
  const [meetings, setMeetings] = useState([
    { id: "IM-2041", title: "Product team weekly sync", date: "2026-10-29", time: "10:30", duration: "30 min", status: "Upcoming", host: "Lochani" },
    { id: "IM-2038", title: "Design review", date: "2026-10-27", time: "14:00", duration: "45 min", status: "Completed", host: "Product Team" },
    { id: "IM-2044", title: "Project planning", date: "2026-10-30", time: "12:00", duration: "60 min", status: "Upcoming", host: "Engineering" }
  ]);
  const login = () => { sessionStorage.setItem("intellmeet-demo-user", "yes"); setSignedIn(true); };
  const logout = () => { sessionStorage.removeItem("intellmeet-demo-user"); setSignedIn(false); };

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route element={<DashboardLayout onLogout={logout} />}>
        <Route path="/dashboard" element={signedIn ? <Dashboard meetings={meetings} /> : <Navigate to="/login" replace />} />
        <Route path="/meetings" element={signedIn ? <Meetings meetings={meetings} /> : <Navigate to="/login" replace />} />
        <Route path="/meetings/create" element={signedIn ? <CreateMeeting onCreate={(m) => setMeetings((old) => [m, ...old])} /> : <Navigate to="/login" replace />} />
        <Route path="/meetings/join" element={signedIn ? <JoinMeeting /> : <Navigate to="/login" replace />} />
        <Route path="/meetings/history" element={signedIn ? <MeetingHistory meetings={meetings} /> : <Navigate to="/login" replace />} />
        <Route path="/profile" element={signedIn ? <Profile /> : <Navigate to="/login" replace />} />
      </Route>
      <Route path="/" element={<Navigate to={signedIn ? "/dashboard" : "/login"} replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}