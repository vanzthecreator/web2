import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Quality first',
    desc: 'We source beans with care and dial in every recipe for balance.',
  },
  {
    title: 'People matter',
    desc: 'From baristas to regulars, community is at the center of our shop.',
  },
  {
    title: 'Warm + modern',
    desc: 'A cozy place with clean design, fast service, and good music.',
  },
]

export default function About() {
  return (
    <section className="coffee-page">
      <div className="container py-5">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-6">
            <div className="coffee-eyebrow text-uppercase">Our story</div>
            <h1 className="coffee-page-title mt-2 mb-3">Made for everyday coffee</h1>
            <p className="text-secondary">
              Coffee Web started with a simple idea: make great coffee feel
              effortless. We roast in small batches, keep our menu focused, and
              build a space that feels calm and welcoming.
            </p>
            <p className="text-secondary mb-4">
              Whether you’re grabbing an espresso on the way to work or staying
              for a slow weekend latte, we want every cup to taste clean,
              smooth, and intentionally crafted.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link to="/menu" className="btn btn-coffee btn-lg">
                Explore menu
              </Link>
              <Link to="/contact" className="btn btn-outline-dark btn-lg">
                Visit us
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="coffee-panel">
              <div className="coffee-panel__title">What we believe</div>
              <div className="row g-3 mt-1">
                {values.map((v) => (
                  <div className="col-12" key={v.title}>
                    <div className="coffee-panel__item">
                      <div className="coffee-panel__item-title">{v.title}</div>
                      <div className="text-secondary">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="coffee-note mt-4">
              Tip: try our seasonal specials—rotating flavors inspired by the
              week’s roast.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
