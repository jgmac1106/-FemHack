import React,{Component} from 'react'

import Navbar from './navbar'
import ApplyButton from './apply_button'

export default class Landing extends Component{
	render(){
		return(
			<div className="landing-div container-fluid center-text">
				<Navbar/>
				<div className="femhack-img-div">
					<img className="femhack-header-img" src={require('../css/images/femhack.png')}/>
				</div>
				<div className="one-liner">
					<br/>
					{'\uFF5B '} A YOUTH EMPOWERED HACK JAM {'\uFF5D'}
				</div>
				<div className="header-date">
					APRIL 16<sup>th</sup> 2016
				</div>
				<div className="header-registration">
					<span className="header-registration-dollar">$1</span><br></br>
					REGISTRATION<br></br>
					PER MEMBER
				</div>
				<ApplyButton />
				<p className="limited-seats center-text">Limited Seats Available</p>
			</div>
		)
	}
}