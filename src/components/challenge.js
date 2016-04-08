import React,{Component} from 'react'
import ApplyButton from './apply_button'

export default class About extends Component{
	render(){
		return(
			<div className="about-div container-fluid padder">
				<div className="">
					<h2 className="about-div-header">// The Challenge</h2>
					<div className="container about-div-list">
						<h3>How do we get more women involved in the Greater New Haven Tech Scene?</h3>
					</div>
				</div>
				<ApplyButton/>
			</div>
		)
	}
}
