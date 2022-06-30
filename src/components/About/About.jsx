import React from "react";
import User from "../../images/pexels-kindel-media-6774143.jpg";
import "./about.css";

export const About = () => {
	return (
		<div className='aboutContainer p-4  md:p-12 '>
			<h1>About Us</h1>
			<div className='about-DetailContainer grid md:grid-cols-2 gap-20'>
				<div className='img_aboutContainer'>
					<img src={User} alt='' />
				</div>
				<div className='text_aboutContainer'>
					<p className='mb-4'>
						Malon Global Technologies Limited (Branded as Malon Tech) brings
						forward years of knowledge, experience, and doggedness, and utilizes
						them to provide its clients with value-added benefits.
					</p>
					<p>
						Since registered in 2011, the target was to offer unique and niche
						solutions with great added value. The Company’s core business areas
						include development of deployment of IT solutions across various
						sectors of human endeavors and businesses.
					</p>
					<p className='mt-4'>
						Malon Tech delivers much more than just technology, it’s objective
						is to fully understand the customers’ business processes and to
						deliver significant added value to its customers by developing
						solutions that dramatically reduce their costs and enhance their
						ability to adapt to changes in their markets.
					</p>
				</div>
			</div>
		</div>
	);
};
