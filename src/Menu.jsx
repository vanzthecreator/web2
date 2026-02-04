import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Espresso Bar',
    items: [
      { name: 'Espresso', desc: 'Single or double shot.', price: '$3.50' },
      { name: 'Americano', desc: 'Espresso + hot water.', price: '$4.00' },
      { name: 'Cappuccino', desc: 'Foamy and classic.', price: '$4.75' },
      { name: 'Latte', desc: 'Silky steamed milk.', price: '$5.00' },
    ],
  },
  {
    title: 'Iced Favorites',
    items: [
      { name: 'Cold Brew', desc: 'Slow-steeped, smooth.', price: '$4.75' },
      { name: 'Iced Latte', desc: 'Light and refreshing.', price: '$5.25' },
      { name: 'Iced Mocha', desc: 'Chocolate + espresso.', price: '$5.75' },
      { name: 'Oat Shaken Espresso', desc: 'Bright, creamy.', price: '$6.25' },
    ],
  },
  {
    title: 'Tea + More',
    items: [
      { name: 'Chai Latte', desc: 'Spiced and cozy.', price: '$5.50' },
      { name: 'Matcha Latte', desc: 'Smooth green tea.', price: '$5.95' },
      { name: 'Hot Chocolate', desc: 'Rich cocoa.', price: '$4.95' },
      { name: 'Sparkling Lemonade', desc: 'Citrus + bubbles.', price: '$4.50' },
    ],
  },
  {
    title: 'Bakery',
    items: [
      { name: 'Butter Croissant', desc: 'Flaky and warm.', price: '$3.25' },
      { name: 'Chocolate Muffin', desc: 'Soft, not too sweet.', price: '$3.75' },
      { name: 'Cinnamon Roll', desc: 'Iced and gooey.', price: '$4.25' },
      { name: 'Banana Bread', desc: 'Toasted on request.', price: '$3.95' },
    ],
  },
]

export default function Menu() {
  return (
    <section className="coffee-page">
      <div className="container py-5">
        <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between align-items-lg-end mb-4">
          <div>
            <div className="coffee-eyebrow text-uppercase">Menu</div>
            <h1 className="coffee-page-title mt-2 mb-0">What we’re serving</h1>
          </div>
          <div className="text-secondary">
            Order ahead for pickup or drop by to hang out.
          </div>
        </div>

        <div className="coffee-menu-note mb-4">
          Prices shown are base. Oat/almond milk +$0.75 • Extra shot +$1.25
        </div>

        <div className="row g-4">
          {sections.map((s) => (
            <div className="col-12 col-lg-6" key={s.title}>
              <div className="coffee-panel h-100">
                <div className="coffee-panel__title">{s.title}</div>
                <div className="d-grid gap-3 mt-3">
                  {s.items.map((i) => (
                    <div className="coffee-menu-item" key={i.name}>
                      <div className="d-flex align-items-start justify-content-between gap-3">
                        <div>
                          <div className="coffee-menu-item__name">{i.name}</div>
                          <div className="text-secondary small">{i.desc}</div>
                        </div>
                        <div className="coffee-menu-item__price">{i.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="coffee-cta mt-5">
          <div className="row align-items-center g-3">
            <div className="col-12 col-lg-8">
              <div className="coffee-cta__title">Want something custom?</div>
              <div className="text-secondary">
                Tell us what you like—sweet, bold, or extra smooth—and we’ll
                recommend a drink.
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-lg-end">
              <Link to="/contact" className="btn btn-coffee btn-lg">
                Ask the barista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

