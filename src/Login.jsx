import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <section className="coffee-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="coffee-panel">
              <div className="coffee-panel__title">Welcome back</div>
              <div className="text-secondary mt-1">
                Sign in to save favorites and order faster.
              </div>

              {done ? (
                <div className="alert alert-success mt-3 mb-0" role="status">
                  Signed in (demo). You can now browse the menu.
                </div>
              ) : (
                <form className="mt-3" onSubmit={handleSubmit}>
                  <div className="mb-3">
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
                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-coffee btn-lg" type="submit">
                      Sign in
                    </button>
                    <Link className="btn btn-outline-dark btn-lg" to="/register">
                      Create an account
                    </Link>
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
