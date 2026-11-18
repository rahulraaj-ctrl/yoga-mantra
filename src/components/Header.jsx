import { navItems } from '../data/siteData'

export default function Header({ menuOpen, onToggleMenu, onCloseMenu }) {
    return (
        <header>
            <div className="nav wrap">
                <a href="#home" className="brand" aria-label="Yoga Mantra home">
                    <img src="https://yogamantraofficial.netlify.app/images/logo.jpeg" alt="Yoga Mantra logo" />
                    Yoga Mantra
                </a>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} onClick={onCloseMenu}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="nav-cta">
                    <a href="#pricing" className="btn btn-primary small-btn">Book Demo</a>
                    <button
                        type="button"
                        className="burger"
                        id="burgerBtn"
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                        onClick={onToggleMenu}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    )
}
