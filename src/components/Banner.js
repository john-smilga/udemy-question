import React from 'react'

export default function Banner({children, title, subtitle,info}) {
	return (
	
			<div className="banner">
				<h1>{title}</h1>
				<div></div>
				<p>{subtitle}</p>
				<p>{children}</p>	
				{info}
			</div>
			
	
	
	)
}
