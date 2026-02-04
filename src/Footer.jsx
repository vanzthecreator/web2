import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="coffee-footer mt-auto">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="brand-mark brand-mark--footer" aria-hidden="true">
                ☕
              </span>
              <span className="brand-name brand-name--footer">Coffee Web</span>
            </div>
            <p className="text-secondary mb-3">
              Small-batch roasting, smooth espresso, and cozy vibes. Order ahead
              or drop in—your next cup is waiting.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge text-bg-light coffee-badge">Fresh roast</span>
              <span className="badge text-bg-light coffee-badge">Fair trade</span>
              <span className="badge text-bg-light coffee-badge">Fast pickup</span>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="footer-title">Explore</div>
            <ul className="list-unstyled d-grid gap-2 m-0">
              <li>
                <Link className="footer-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <div className="footer-title">Visit</div>
            <div className="text-secondary small">
              <div className="mb-2">
                <div className="fw-semibold text-body">Hours</div>
                Mon–Fri 7:00–18:00<br />
                Sat–Sun 8:00–16:00
              </div>
              <div>
                <div className="fw-semibold text-body">Location</div>
                Downtown, Your City
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 opacity-25" />

        <div className="d-flex flex-column flex-md-row gap-2 justify-content-between align-items-md-center">
          <div className="text-secondary small">
            © {year} Coffee Web. All rights reserved.
          </div>
          <div className="d-flex gap-3 small">
            <span className="text-secondary">Made with care.</span>
            <Link className="footer-link" to="/login">
              Sign in
            </Link>
            <Link className="footer-link" to="/register">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
