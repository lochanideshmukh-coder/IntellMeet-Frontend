export default function SummaryCard({ label, value, note, icon: Icon, tone = "blue" }) {
  return <article className="summary-card"><div className={`summary-icon ${tone}`}>{Icon && <Icon size={20} />}</div><div className="summary-label">{label}</div><div className="summary-value">{value}</div><div className="summary-note">{note}</div></article>;
}