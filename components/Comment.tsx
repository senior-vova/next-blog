export default function Comment({ name, email, body }) {
  return (
    <div className="card my-2">
      <div className="card-header big-letter">{name}</div>
      <div className="card-body">
        <div className="card-title">{email}</div>
        <div className="card-text big-letter">{body}</div>
      </div>
    </div>
  );
}
