import { Link } from 'react-router-dom'

const featured = [
  {
    name: 'Espresso',
    desc: 'Rich, bold, and perfectly pulled.',
    price: '$3.50',
  },
  {
    name: 'Vanilla Latte',
    desc: 'Creamy sweetness with a smooth finish.',
    price: '$5.25',
  },
  {
    name: 'Cold Brew',
    desc: 'Slow-steeped, crisp, and refreshing.',
    price: '$4.75',
  },
  {
    name: 'Mocha',
    desc: 'Chocolate + espresso, balanced and cozy.',
    price: '$5.50',
  },
]

const perks = [
  {
    title: 'Small-batch roast',
    desc: 'Roasted fresh for balanced flavor and aroma.',
  },
  {
    title: 'Order ahead',
    desc: 'Skip the line with quick pickup.',
  },
  {
    title: 'Cozy atmosphere',
    desc: 'A calm place to work, meet, and unwind.',
  },
]

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-4">
      <div className="text-uppercase coffee-eyebrow">{eyebrow}</div>
      <h2 className="coffee-h2 mt-2">{title}</h2>
      {subtitle ? <p className="text-secondary mb-0">{subtitle}</p> : null}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <header className="coffee-hero">
        <div className="container py-5">
          <div className="row align-items-center g-5 py-lg-4">
            <div className="col-12 col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 coffee-pill mb-3">
                <span className="coffee-dot" aria-hidden="true" />
                Freshly roasted • Smooth espresso • Fast pickup
              </div>
              <h1 className="coffee-h1 mb-3">
                Your daily cup,
                <br />
                made better.
              </h1>
              <p className="coffee-lead mb-4">
                Coffee Web is a warm, modern coffee spot for espresso lovers and
                weekend sippers—crafted with care from bean to brew.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link to="/menu" className="btn btn-coffee btn-lg">
                  View menu
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  Visit us
                </Link>
              </div>

              <div className="row g-3 mt-4">
                <div className="col-12 col-sm-4">
                  <div className="coffee-stat">
                    <div className="coffee-stat__value">15+</div>
                    <div className="coffee-stat__label">Drinks</div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="coffee-stat">
                    <div className="coffee-stat__value">7am</div>
                    <div className="coffee-stat__label">Open weekdays</div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="coffee-stat">
                    <div className="coffee-stat__value">5★</div>
                    <div className="coffee-stat__label">Customer love</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="coffee-hero-card">
                <div className="coffee-hero-card__top">
                  <div className="coffee-hero-card__badge">Today’s pick</div>
                  <div className="coffee-hero-card__title">Honey Oat Latte</div>
                  <div className="coffee-hero-card__sub">
                    Espresso • Oat milk • Honey drizzle
                  </div>
                </div>
                <div className="coffee-hero-card__bottom">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="text-secondary small">Starting at</div>
                      <div className="coffee-price">$5.95</div>
                    </div>
                    <Link to="/menu" className="btn btn-coffee">
                      Order
                    </Link>
                  </div>
                  <div className="coffee-divider" />
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge text-bg-light coffee-badge">
                      Smooth
                    </span>
                    <span className="badge text-bg-light coffee-badge">
                      Not too sweet
                    </span>
                    <span className="badge text-bg-light coffee-badge">
                      Crowd favorite
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="coffee-section">
        <div className="container py-5">
          <SectionTitle
            eyebrow="Why Coffee Web"
            title="Coffee that fits your day"
            subtitle="From espresso shots to slow sips—crafted for flavor, comfort, and speed."
          />
          <div className="row g-4">
            {perks.map((p) => (
              <div className="col-12 col-md-4" key={p.title}>
                <div className="coffee-card h-100">
                  <div className="coffee-card__icon" aria-hidden="true">
                    ✦
                  </div>
                  <div className="coffee-card__title">{p.title}</div>
                  <p className="text-secondary mb-0">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="coffee-section coffee-section--alt">
        <div className="container py-5">
          <SectionTitle
            eyebrow="Featured"
            title="Popular picks"
            subtitle="Clean ingredients, bold flavors, and a cozy finish."
          />
          <div className="row g-4">
            {featured.map((item) => (
              <div className="col-12 col-md-6 col-lg-3" key={item.name}>
                <div className="coffee-product h-100">
                  <div className="coffee-product__name">{item.name}</div>
                  <p className="text-secondary mb-3">{item.desc}</p>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="coffee-product__price">{item.price}</div>
                    <Link to="/menu" className="btn btn-outline-dark btn-sm">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/menu" className="btn btn-coffee btn-lg">
              Browse full menu
            </Link>
          </div>
        </div>
      </section>

      <section className="coffee-section">
        <div className="container py-5">
          <div className="coffee-cta">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-7">
                <div className="coffee-cta__eyebrow">Ready for a great cup?</div>
                <div className="coffee-cta__title">
                  Order ahead and pick up in minutes.
                </div>
                <div className="text-secondary">
                  No complicated steps—just choose a drink and we’ll handle the
                  rest.
                </div>
              </div>
              <div className="col-12 col-lg-5 d-flex flex-wrap gap-2 justify-content-lg-end">
                <Link to="/menu" className="btn btn-coffee btn-lg">
                  Order now
                </Link>
                <Link to="/about" className="btn btn-outline-dark btn-lg">
                  Our story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
