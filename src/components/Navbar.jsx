import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleBookClick = () => {
    if (location.pathname === '/') {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#booking')
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border-green">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-primary text-lg">●</span>
          <span className="text-primary-dark font-semibold text-lg">MintSlot</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-primary-mid text-sm hover:text-primary transition">Home</Link>
          <Link to="/about" className="text-primary-mid text-sm hover:text-primary transition">About</Link>
          <Link to="/contact" className="text-primary-mid text-sm hover:text-primary transition">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={handleBookClick} className="bg-primary text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary-dark transition">
            Book Now
          </button>
          <button className="md:hidden text-primary-mid" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-green px-6 py-4 space-y-3">
          <Link to="/" className="block text-primary-mid text-sm hover:text-primary transition" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="block text-primary-mid text-sm hover:text-primary transition" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="block text-primary-mid text-sm hover:text-primary transition" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
