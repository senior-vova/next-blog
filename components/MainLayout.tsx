import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Link from "next/link";

export default function MainLayout({ children, title, activeRoute }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container-fluid bg-light min-vh-100">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <Link href={"/"} as={process.env.BACKEND_URL + `/`}>
              <a className="navbar-brand">Next Blog</a>
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link href={"/"} as={process.env.BACKEND_URL + `/`}>
                  <a
                    className={`nav-link ${
                      activeRoute === "home" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={"/articles"}
                  as={process.env.BACKEND_URL + `/articles`}
                >
                  <a
                    className={`nav-link ${
                      activeRoute === "articles" ? "active" : ""
                    }`}
                  >
                    Articles
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/albums"} as={process.env.BACKEND_URL + `/albums`}>
                  <a
                    className={`nav-link ${
                      activeRoute === "albums" ? "active" : ""
                    }`}
                  >
                    Albums
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      </div>
      <footer className="blog-footer">
        <p>
          Blog template built for{" "}
          <a href="https://github.com/ags-devs-team" target="_blank">
            AGS
          </a>{" "}
          by{" "}
          <a href="https://github.com/senior-vova" target="_blank">
            @senior-vova
          </a>
          .
        </p>
      </footer>
    </>
  );
}
