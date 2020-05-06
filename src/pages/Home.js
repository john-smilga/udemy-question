import React, {Component} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';
import Carousel from '../components/Carousel'



export default class Home extends Component {

	render() {
		return (
			<>
			<Hero>
				<Banner 
				title="Luxurious appartements"
				subtitle="Deluxe starting at 200$"
				info="
				ORANGERIE Projects are being developed by an experienced international team that have been developing and constructing many real estate projects in Northern Cyprus for more than a decade. The Orangerie trademark is well known for its beautiful classic designs, attention to details and very high quality standards..."
				>
				<Link to='/' className="btn-primary">Our rooms</Link>
				</Banner>
			</Hero>
			<Carousel imagescarousel="../cupcake.jpg"/>
			<FeaturedRooms/>
		</>
		)
	}
}



