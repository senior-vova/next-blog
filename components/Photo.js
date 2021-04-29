export default function Photo({ title, url }) {
  return (
    <div className="card my-2 w-75">
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title big-letter">{title}</h5>
      </div>
    </div>
  );
}
