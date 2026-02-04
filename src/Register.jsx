import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <section className="coffee-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-6">
            <div className="coffee-panel">
              <div className="coffee-panel__title">Create your account</div>
              <div className="text-secondary mt-1">
                Save favorites and get quick reorder access.
              </div>

              {done ? (
                <div className="alert alert-success mt-3 mb-0" role="status">
                  Account created (demo). You can sign in now.
                </div>
              ) : (
                <form className="mt-3" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="firstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="confirmPassword">
                        Confirm password
                      </label>
                      <input
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Repeat password"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-coffee btn-lg w-100" type="submit">
                        Create account
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <span className="text-secondary">Already have an account?</span>{' '}
                      <Link className="footer-link" to="/login">
                        Sign in
                      </Link>
                    </div>
                  </div>
                </form>
              )}

              <div className="coffee-auth-note mt-3">
                This is a front-end design demo (no real authentication yet).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
