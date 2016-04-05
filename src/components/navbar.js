import React,{Component} from 'react'

export default class NavBar extends Component{
	render(){
		return(
			<nav className="navbar  navbar-custom" role="navigation">
				<div className="navbar-header">
					<img className="brand-logo" src={require('../css/images/wc_brand.png')}/>
					<div className="navbar-brand"></div>
				</div>
			</nav>
		)
	}
}