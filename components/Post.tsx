import Link from "next/link";

export default function Post({ title, id, body }) {
  return (
    <>
      <div className="col-12">
        <div className="row no-gutters border rounded flex-md-row mb-4 hover">
          <div className="col p-4 d-flex flex-column">
            <h3 className="mb-0 big-letter">{title}</h3>
            <p className="my-3 big-letter">{body}</p>
            <Link
              href={`/articles/${id}`}
              as={process.env.BACKEND_URL + `/articles/${id}`}
            >
              <a className="stretched-link">Continue reading</a>
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block"></div>
        </div>
      </div>
    </>
  );
}
