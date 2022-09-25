import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.svg';
import './Logo.css';

const Logo = () =>{
	return (
		<Tilty className='Tilty ma4 mt0 br2 shadow-2' options={{ max : 55 }} style={{ height: 150, width: 150 }}>
			<img style={{paddingTop: '1px'}} alt='logo' src={brain}/>
		</Tilty>
	)
}

export default Logo;