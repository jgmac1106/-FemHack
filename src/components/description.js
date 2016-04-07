import React,{Component} from 'react'

export default class Description extends Component{
	render(){
		return(
			<div className="description-div container-fluid padder center-text">
				<h2 className="description-header">// What to expect</h2>
				<p className="description-paragraph">
					Join  #FemHack at Southern Connecticut State University April 16th. 
					We welcome teens and young adults to join us in building awesome software
					and hardware projects. Meet scholars, Industry experts, and mentors
					from all over the country as we work together  to create an environment
					that fosters learning through tech talks and one-on-one guidance.
					We encourage women of all levels, beginners and experts alike, to challenge
					themselves and expand their skills.
				</p>
			</div>
		)
	}
}