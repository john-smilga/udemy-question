// import React , {Component} from 'react';
// import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../components/Hero';
// import Banner from '../components/Banner';
// import {Link} from 'react-router-dom';
// import {RoomContext} from '../context';




// export default class SingleRoom extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state ={
// 			slug:this.props.match.params.slug,
// 			defaultBcg
// 		}
// 	}
// 	static contextType = RoomContext;
// 	componentDidMount(){

// 	}
// 	render() {
// 		const {getRoom} = this.context;
// 		const room = getRoom(this.state.slug);
// 		if(!room){
// 			return(
// 			<div className="error">
// 				<h3>no such room found...</h3>
// 				<Link to='/rooms' className='btn-primary'>
// 					back to rooms
// 				</Link>
// 			</div>
// 			);
// 		}
// 		const {name,description} = room
// 		return (
// 			<Hero
// 			hero="roomsHero"
// 			>
// 				<Banner title={`${name} room`}>
// 					<Link to="/rooms" className="btn-primary">
// 						back to rooms
// 					</Link>
// 				</Banner>
// 			</Hero>
// 		)
// 	}
// }