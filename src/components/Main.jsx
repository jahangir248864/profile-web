import { useState } from 'react'
import Card from './Card.jsx'

const creators = [
	{
		name: 'Amara Okafor',
		role: 'Art director & image-maker',
		location: 'Brooklyn, NY',
		category: 'Design',
		image: 'photo-1534528741775-53994a69daeb',
		color: 'rose',
		projects: 18,
	},
	{
		name: 'Theo Park',
		role: 'Independent filmmaker',
		location: 'Los Angeles, CA',
		category: 'Film',
		image: 'photo-1500648767791-00dcc994a43e',
		color: 'blue',
		projects: 12,
	},
	{
		name: 'Leila Haddad',
		role: 'Writer & cultural researcher',
		location: 'London, UK',
		category: 'Writing',
		image: 'photo-1531123897727-8f129e1688ce',
		color: 'yellow',
		projects: 24,
	},
	{
		name: 'Mateo Silva',
		role: 'Creative developer',
		location: 'Lisbon, PT',
		category: 'Development',
		image: 'photo-1506794778202-cad84cf45f1d',
		color: 'green',
		projects: 16,
	},
	{
		name: 'Nia Williams',
		role: 'Photographer & set stylist',
		location: 'Atlanta, GA',
		category: 'Photography',
		image: 'photo-1524504388940-b1c1722653e1',
		color: 'blue',
		projects: 21,
	},
	{
		name: 'Elliot Chen',
		role: 'Composer & sound artist',
		location: 'Taipei, TW',
		category: 'Music',
		image: 'photo-1504593811423-6dd665756598',
		color: 'rose',
		projects: 9,
	},
]

const categories = ['All people', 'Design', 'Film', 'Writing', 'Development', 'Photography', 'Music']

function Main() {
	const [activeCategory, setActiveCategory] = useState('All people')
	const visibleCreators = activeCategory === 'All people'
		? creators
		: creators.filter((creator) => creator.category === activeCategory)

	return (
		<main id="top">
			<section className="intro-section" aria-labelledby="intro-title">
				<div className="intro-copy">
					<p className="eyebrow"><span className="eyebrow-dot" /> A directory for creative people</p>
					<h1 id="intro-title">Good work<br />starts with <span>good people.</span></h1>
					<p className="intro-description">
						Meet thoughtful independent creators making things with care, curiosity, and a point of view.
					</p>
					<a className="intro-link" href="#creators">Meet the community <span aria-hidden="true">↓</span></a>
				</div>
				<div className="intro-aside" aria-label="Community snapshot">
					<div className="aside-art" aria-hidden="true">
						<div className="art-ring art-ring-one" />
						<div className="art-ring art-ring-two" />
						<span className="art-spark">✳</span>
						<span className="art-note">MAKE<br />ROOM</span>
					</div>
					<div className="community-count"><strong>240+</strong><span>people making<br />good things</span></div>
				</div>
			</section>

			<section className="creator-section" id="creators" aria-labelledby="creator-title">
				<div className="section-heading">
					<div>
						<p className="eyebrow">The people behind the work</p>
						<h2 id="creator-title">Find your kind of creative.</h2>
					</div>
					<p className="results-count">Showing <strong>{visibleCreators.length}</strong> of {creators.length} creators</p>
				</div>
				<div className="category-list" role="group" aria-label="Filter creators by discipline">
					{categories.map((category) => (
						<button
							className={`category-button${activeCategory === category ? ' category-button-active' : ''}`}
							key={category}
							type="button"
							aria-pressed={activeCategory === category}
							onClick={() => setActiveCategory(category)}
						>
							{category}
						</button>
					))}
				</div>
				<div className="creator-grid" aria-live="polite">
					{visibleCreators.map((creator) => <Card key={creator.name} creator={creator} />)}
				</div>
				{visibleCreators.length === 0 && <p className="empty-state">No creators in this category yet.</p>}
			</section>
		</main>
	)
}

export default Main
