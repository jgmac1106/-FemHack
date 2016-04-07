import React,{Component} from 'react'

export default class Contact extends Component{
	render(){
		return(
			<div className="contact-div container-fluid center-text padder">
				<h2 className="contact-header">//Contact Us!</h2>
				<div className="contact-info">
					<div className="col-md-6">
							<h2>Volunteer as Mentor</h2><br/>
							For information pertaining to Mentors <br />
							Please email the SCSU Computer Club @ <br />
							computer.club@owls.southernct.edu
					</div>
					<div className="col-md-6">
							<h2>Additional Information</h2><br />
							If you have additional questions and inquries<br/>
							Please email Dr. Yi-Chun Tricia Lin @ <br />
							Liny4@southernct.edu
					</div>
				</div>
			</div>
		)
	}
}