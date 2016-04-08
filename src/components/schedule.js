import React,{Component} from 'react'
import ApplyButton from './apply_button'

export default class About extends Component{
	render(){
		return(
			<div className="about-div container-fluid padder">
				<div className="">
					<h2 className="about-div-header">// THE SCHEDULE</h2>
					<div className="container about-div-list">
						<h3>Friday</h3>
						<p>3:15 YouthZone Session One: Learn basic HTML by remixing websites about current events</p>
						<p>4:15 YouthZone Session Two: Evaluate the 13 principles of a feminist Web</p>
						<p>5:15 YouthZone Session Three: Create a movie poster using HTML and CSS</p>
						<h3>Saturday</h3>
						<p>8:30-9:00   Registration
						<p>9:00-9:45   Icebreaker: If you have never built a website learn how as we send letters to the next president</p>
						<p>12:30       Lunch  </p>    
						<p>4:30-5:00   Judging</p>     
					</div>
				</div>
				<ApplyButton/>
			</div>
		)
	}
}
