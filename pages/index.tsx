import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();
  return {
    props: {
      mainPost: posts[0],
      posts: [posts[1], posts[2]],
    },
  };
};

export default function Home({ mainPost, posts }) {
  return (
    <MainLayout title={"Next Blog | Home"} activeRoute={"home"}>
      <div className="jumbotron mt-4 mb-3 py-3 px-4 text-dark border rounded bg-white">
        <h4>
          Welcome to Next Blog example by{" "}
          <a href="https://github.com/senior-vova" target="_blank">
            Senior Vova
          </a>
        </h4>
        <h4>
          Fork me on Github{" "}
          <a href="https://github.com/senior-vova/next-blog" target="_blank">
            Next Blog
          </a>
        </h4>
        <h5>The Design used from Bootstrap-Blog</h5>
      </div>
      <div className="jumbotron p-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Article of Week</h1>
          <p className="lead my-3 big-letter">{mainPost.title}</p>
          <p className="lead mb-0">
            <Link
              href={`/articles/${mainPost.id}`}
              as={process.env.BACKEND_URL + `/articles/${mainPost.id}`}
            >
              <a className="text-white font-weight-bold">Continue reading...</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h3 className="mb-0 big-letter">{posts[1].title}</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="mb-auto big-letter">{posts[1].body}</p>
              <Link
                href={`/articles/${posts[1].id}`}
                as={process.env.BACKEND_URL + `/articles/${posts[1].id}`}
              >
                <a className="stretched-link">Continue reading</a>
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Design
              </strong>
              <h3 className="mb-0 big-letter">{posts[0].title}</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto big-letter">{posts[0].body}</p>
              <Link
                href={`/articles/${posts[0].id}`}
                as={process.env.BACKEND_URL + `/articles/${posts[0].id}`}
              >
                <a className="stretched-link">Continue reading</a>
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
