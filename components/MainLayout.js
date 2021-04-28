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
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href={"/"}>
              <a className="navbar-brand">Next Blog</a>
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link href={"/"}>
                  <a
                    className={`nav-link ${
                      activeRoute === "home" ? "active" : ""
                    }`}
                  >
                    Главная
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/articles"}>
                  <a
                    className={`nav-link ${
                      activeRoute === "articles" ? "active" : ""
                    }`}
                  >
                    Статьи
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/albums"}>
                  <a
                    className={`nav-link ${
                      activeRoute === "albums" ? "active" : ""
                    }`}
                  >
                    Альбомы
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
