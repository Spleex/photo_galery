import React from 'react'
import { Navbar } from '../../common';


import './Header.css'

function Header (){
	
	return (
		<div className="header">
			<div className ="header-top_logo">

				<div className="header-top__navigation">
					<a href="/" className="header-logo"><img src="2.png" width="300" height="300"></img></a>
					 <Navbar />
				</div>
			</div>
		</div>
			
			
		
	)
}
export default Header;