import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          AIA PDF
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Split PDF
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Merge PDF
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                PDF to Word
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mw-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
