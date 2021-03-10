import React from 'react';

const card =(props) => {
	const{name,email,id}=props;
	return(
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='photo' src={`https://robohash.org/${id}?200x200`}/>
		<div>
		<h2>{props.name}</h2>
		<p> {props.email}</p>
		</div>
		</div>
		);
}
export default card 