import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Title from '../components/Title'

import { FaPhone,FaGlobeAmericas, FaEnvelope } from "react-icons/fa";




const Rooms = () =>{
	return(
		<>
		<Hero hero="contactusHero">

		<Title title="Contact Us"/>
		<div className="container">
			<div className="row">
				<div className="d-flex justify-content-around col-4">
				<FaPhone/>
				<span>+90 533 846 6596</span>
				</div>
				<div className="col-4">
				<FaGlobeAmericas/>
				<span>+92 254 546 4927 (WhatsApp)</span>
				</div>
				<div className="col-4">
				<FaEnvelope/>
				<span>cyprus4u@gmail.com</span>
				</div>
				
			</div>
		</div>
		</Hero>
		</>
	);
};

export default Rooms;

