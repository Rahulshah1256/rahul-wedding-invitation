import React, { useCallback, useState } from 'react';
import bibahlogo from '../images/a123.png';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = useCallback(() => setMenuOpen(false), []);

	return (
		<header>
			<div className="container">
				<a className="logo" href={process.env.PUBLIC_URL + '/'}>
					<img src={bibahlogo} alt="Logo" />
				</a>

				<button
					type="button"
					className="menu-nav-icon"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((v) => !v)}
				>
					<i className="icon icon-bars" />
				</button>

				<ul className={menuOpen ? 'main-menu visible' : 'main-menu'}>
					<li><a href="#home" onClick={closeMenu}>Home</a></li>
					<li><a href="#invitation" onClick={closeMenu}>Invitation</a></li>
					<li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
					<li><a href="#ceremony" onClick={closeMenu}>Ceremony</a></li>
					<li><a href="#story" onClick={closeMenu}>Our Story</a></li>
					<li><a href="#location" onClick={closeMenu}>Location</a></li>
					<li><a href="#contact" onClick={closeMenu}>Contact</a></li>
				</ul>
			</div>
		</header>
	);
}

export default Header;