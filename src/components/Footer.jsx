import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-green py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-primary">●</span>
            <span className="text-primary-dark font-semibold text-lg">MintSlot</span>
          </div>
          <p className="text-sm text-primary-mid mt-2">Your time, your slot.</p>
          <p className="text-xs text-primary-mid mt-4">© 2025 MintSlot. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            Quick links
          </h3>
          <Link to="/" className="block text-sm text-primary-mid hover:text-primary mb-2">Home</Link>
          <Link to="/" className="block text-sm text-primary-mid hover:text-primary mb-2">Services</Link>
          <Link to="/about" className="block text-sm text-primary-mid hover:text-primary mb-2">About</Link>
          <Link to="/contact" className="block text-sm text-primary-mid hover:text-primary mb-2">Contact</Link>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            Get in touch
          </h3>
          <p className="text-sm text-primary-mid mb-2">+91 00000 00000</p>
          <p className="text-sm text-primary-mid mb-2">hello@mintslot.in</p>
          <p className="text-sm text-primary-mid">123 Main Street, Your City</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto border-t border-border-green mt-8 pt-6 text-xs text-primary-mid text-center">
        MintSlot — Your time, your slot.
      </div>
    </footer>
  )
}
