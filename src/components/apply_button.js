import React, {Component} from 'react'

export default class ApplyButton extends Component{
	render(){
		return(
			<div className="apply-button">
				<br/>
				<a href="https://www.southernct.edu/academics/schools/arts/departments/womensstudies/annualconference/pre-registrationforms.html">
					<button type="button" className="btn btn-warning btn-lg">Register Now</button>
				</a>
			</div>
		)
	}
}