import Link from "next/link";

export default function Album({ title, id }) {
  return (
    <>
      <div className="col-12">
        <div className="row no-gutters border rounded flex-md-row mb-4 hover">
          <div className="col p-4 d-flex flex-column">
            <h3 className="mb-0 big-letter">{title}</h3>
            <Link
              href={`/album/${id}`}
              as={process.env.BACKEND_URL + `/album/${id}`}
            >
              <a className="stretched-link">See</a>
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block"></div>
        </div>
      </div>
    </>
  );
}
