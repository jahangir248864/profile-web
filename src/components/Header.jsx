import './Header.css'

function Header() {
	return (
		<header className="site-header">
			<a className="brand" href="#top" aria-label="Commonroom home">
				<span className="brand-mark" aria-hidden="true">c.</span>
				<span className="brand-name">commonroom</span>
			</a>
			<nav className="header-nav" aria-label="Main navigation">
				<a className="nav-link nav-link-active" href="#creators">Discover</a>
				<a className="nav-link" href="#about">About</a>
			</nav>
			<a className="header-join" href="mailto:hello@commonroom.studio">
				Join the directory <span aria-hidden="true">↗</span>
			</a>
		</header>
	)
}

export default Header
