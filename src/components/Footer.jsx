import './Footer.css'

function Footer() {
	return (
		<footer className="site-footer" id="about">
			<a className="footer-brand" href="#top">commonroom<span>®</span></a>
			<p>A little more room for good work.</p>
			<div className="footer-links">
				<a href="#creators">Explore creators</a>
				<a href="mailto:hello@commonroom.studio">Say hello <span aria-hidden="true">↗</span></a>
			</div>
			<span className="footer-copyright">© 2026 Commonroom</span>
		</footer>
	)
}

export default Footer
