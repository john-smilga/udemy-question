import React, { Component } from 'react';
//import items (default name) of the data file
import items from './data'

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
	state={
		//store info about the rooms
		rooms:[],
		//3 rooms
		featuredRooms:[],
		loading:true
	}



//The componentDidMount() method is called after the component is rendered.
//This is where you run statements that requires that the component is already placed in the DOM.

//update the value of state
componentDidMount(){
	//on a les rooms
	let rooms = this.formatData(items);
	//ensuite on filtre la nouvelle array rooms, si featured property est true alors cette room sera ajoutee a featuredRooms array
	let featuredRooms = rooms.filter(room => room.featured === true);
	this.setState({
		rooms,
		featuredRooms,
		loading:false
	});
}

formatData(items){
	//loop throught the items
	let tempItems = items.map(item =>{
		//every item has 
		let id = item.sys.id
		let images = item.fields.images.map(image=>image.fields.file.url)
		let imagestechnical = item.fields.imagestechnical.map(imagest=>imagest.fields.file.url)
		let imageslocation = item.fields.imageslocation.map(imagesl=>imagesl.fields.file.url)
		let logo = item.fields.logo.map(imageslogo=>imageslogo.fields.file.url)
		let room = {...item.fields,images,id,imagestechnical,imageslocation,logo}
		
			return room;

	});
	return tempItems;
}


//one argument slug that we filter
getRoom = (slug) =>{
	let tempRooms = [...this.state.rooms];
	const room = tempRooms.find(room =>room.slug 
	=== slug);
	return room;
};

	render() {
		return (
			<RoomContext.Provider 
			//pour acceder a lobject state il faut ajouter {{}}
				value={{
					...this.state,
					getRoom : this.getRoom
				}}
				>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext}