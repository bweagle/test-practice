export function ProgressBar({ percentage }) {
  return (
    <div className="staar-progress">
      <div
        className="staar-progress-fill"
        style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
      />
    </div>
  );
}
