import { useState } from 'react'
import './Card.css'

function Card({ creator }) {
	const [isFollowing, setIsFollowing] = useState(false)

	return (
		<article className="creator-card">
			<div className={`creator-photo creator-photo-${creator.color}`}>
				<img
					src={`https://images.unsplash.com/${creator.image}?auto=format&fit=crop&w=720&q=85`}
					alt={`${creator.name}, ${creator.role}`}
					loading="lazy"
				/>
				<span className="creator-category">{creator.category}</span>
				<span className="photo-index">CR / {String(creator.projects).padStart(2, '0')}</span>
			</div>
			<div className="creator-info">
				<div className="creator-copy">
					<h3>{creator.name}</h3>
					<p>{creator.role}</p>
				</div>
				<button
					className={`follow-button${isFollowing ? ' follow-button-active' : ''}`}
					type="button"
					aria-label={`${isFollowing ? 'Unfollow' : 'Follow'} ${creator.name}`}
					aria-pressed={isFollowing}
					onClick={() => setIsFollowing(!isFollowing)}
				>
					{isFollowing ? 'Following' : 'Follow'}
				</button>
			</div>
			<div className="creator-meta">
				<span><span className="meta-pin" aria-hidden="true">↗</span>{creator.location}</span>
				<span>{creator.projects} projects</span>
			</div>
		</article>
	)
}

export default Card
