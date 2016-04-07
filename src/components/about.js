import React,{Component} from 'react'
import ApplyButton from './apply_button'

export default class About extends Component{
	render(){
		return(
			<div className="about-div container-fluid padder">
				<div className="">
					<h2 className="about-div-header">// OUR FLOW</h2>
					<div className="container about-div-list">
						<p>A one day event where teams of youth will prototype, design, and pitch a campaign, website, app, or technology</p>
						<p>Guest panelists will lead a consensus ballot vote to choose winners</p>
						<p>Teams of 3-5 must consist of at least fifty percent members who do not self identify as males</p>
						<p>Mentors from Southern Connecticut State University Computer Science Club and A100 will be available for each team</p>
					</div>
				</div>
				<ApplyButton/>
			</div>
		)
	}
}