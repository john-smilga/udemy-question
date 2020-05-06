import React from 'react';
import {Link} from 'react-router-dom';

export default function Room({room}) {
	const {name,slug,images} = room;
	return (
		<article className="room">
			<div className="img-container">
				<img style={{height:"200px"}} src={images[0]}/>
				<Link to={`/rooms/${slug}`} 
				className="btn-primary room-link">
					Discover
				</Link>
			</div>
			<p className="room-info">{name}</p>
		</article>
	)
}
