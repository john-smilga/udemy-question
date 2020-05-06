import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {RoomConsumer} from '../context';
import Loading from './Loading'


export default function RoomsContainer() {
	return (
		<RoomConsumer>
			{
				value => {
					const{loading,rooms} = value
					if (loading){
						return <Loading/>;
					}
					return(
						<div>
						hello froms rooms container
						<RoomsFilter rooms={rooms}></RoomsFilter>
						<RoomsList rooms={rooms}></RoomsList>
					</div>
					);
				}
			}
		</RoomConsumer>
	
	)
}
