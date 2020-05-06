import React, { Component } from 'react';
import Title from './Title';

export default class Services extends Component {
	constructor(props) {
		super(props);
		this.state = {
			services:[
				{
					info:"Our companies have more than 10 years of experience in real-estate developments in North Cyprus. Including Purchasing of lands, planning, obtaining permits, construction and management. We have the capabilities to make all the necessary maintenance of the project, including yearly and Holiday rentals. Our experience and contacts in Holiday rentals and yearlong rentals will be to your benefit."
				},
				{
					
					info:"ORANGERIE Projects are being developed by an experienced international team that have been developing and constructing many real estate projects in Northern Cyprus for more than a decade. The Orangerie trademark is well known for its beautiful classic designs, attention to details and very high quality standards. We choose our projects locations carefully and uncompromisingly, as we look to insure a relaxed and comfortable life style. The projects are located next to amenities, in a walking distance to the main road and in the vicinity of five stars hotels & Casino and the beach. Our high quality developments, combined with the carefully chosen locations, ensure a very easy to rent property, a great holiday or permanent apartment and an investment that appreciates as we consider the developing and planned investments in the area, as well. Our team gives a full service to our clients, including- rental management and all type of maintenance."
				},
			
			]
		};
	  }
	render() {
		return (
			<section className="services">
				<Title title='About Us'/>
				<div className="services-center">
					{this.state.services.map((item, index)=>{
						return(
							<article key={index} className="service">
								<p>{item.info}</p>
							</article>
						)
					
					})}
				</div>
			</section>
		)
	}
}
