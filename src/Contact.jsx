import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="coffee-page">
      <div className="container py-5">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-6">
            <div className="coffee-eyebrow text-uppercase">Contact</div>
            <h1 className="coffee-page-title mt-2 mb-3">Come say hi</h1>
            <p className="text-secondary mb-4">
              Questions, catering, or custom drink ideas? Send a message and
              we’ll get back to you.
            </p>

            <div className="coffee-panel">
              <div className="coffee-panel__title">Shop info</div>
              <div className="row g-3 mt-2">
                <div className="col-12">
                  <div className="coffee-kv">
                    <div className="coffee-kv__k">Address</div>
                    <div className="coffee-kv__v">Downtown, Your City</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="coffee-kv">
                    <div className="coffee-kv__k">Hours</div>
                    <div className="coffee-kv__v">
                      Mon–Fri 7:00–18:00
                      <br />
                      Sat–Sun 8:00–16:00
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="coffee-kv">
                    <div className="coffee-kv__k">Phone</div>
                    <div className="coffee-kv__v">(000) 000-0000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="coffee-panel">
              <div className="coffee-panel__title">Send a message</div>

              {sent ? (
                <div className="alert alert-success mt-3 mb-0" role="status">
                  Message sent. We’ll reply soon.
                </div>
              ) : (
                <form className="mt-3" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
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
                    <div className="col-12">
                      <label className="form-label" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="What’s this about?"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message..."
                        required
                      />
                    </div>
                    <div className="col-12 d-flex flex-wrap gap-2">
                      <button className="btn btn-coffee btn-lg" type="submit">
                        Send message
                      </button>
                      <button
                        className="btn btn-outline-dark btn-lg"
                        type="button"
                        onClick={() => setSent(false)}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

