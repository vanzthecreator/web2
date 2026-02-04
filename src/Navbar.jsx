import { NavLink } from 'react-router-dom'

function CoffeeCupIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      {...props}
    >
      <path
        d="M7 8.5h8.75c.97 0 1.75.78 1.75 1.75V12c0 3.866-3.134 7-7 7H9.75C5.884 19 2.75 15.866 2.75 12v-1.75C2.75 9.28 3.53 8.5 4.5 8.5H7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10.25h1.15c1.463 0 2.65 1.187 2.65 2.65v.1c0 1.463-1.187 2.65-2.65 2.65H17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 5.5c0-1.3 1.1-2.3 2.4-2.3M10.5 5.5c0-1.3 1.1-2.3 2.4-2.3M13.5 5.5c0-1.3 1.1-2.3 2.4-2.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

const navLinkClass = ({ isActive }) =>
  `nav-link px-lg-3 ${isActive ? 'active' : ''}`

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark coffee-nav sticky-top">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="brand-mark">
            <CoffeeCupIcon />
          </span>
          <span className="brand-name">Coffee Web</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#coffeeNavbar"
          aria-controls="coffeeNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="coffeeNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <NavLink className={navLinkClass} to="/admin/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
=======
>>>>>>> a4427a4737d055665333c346d95ecdd4374e46c6
              <NavLink className={navLinkClass} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
            <NavLink to="/login" className="btn btn-outline-light btn-sm">
              Sign in
            </NavLink>
            <NavLink to="/menu" className="btn btn-coffee btn-sm">
              Order now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
