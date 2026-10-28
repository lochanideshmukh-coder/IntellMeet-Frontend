// Example placeholder for future route protection.
// Real authorization must be enforced by the backend, not only by frontend routing.
export default function ProtectedRoute({ children, signedIn }) {
  return signedIn ? children : null;
}