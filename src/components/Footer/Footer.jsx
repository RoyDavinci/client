import React, { useState } from "react";
import "./footer.css";
import Logo from "../../images/malon/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className=' md:p-12 p-4 bg-[#0B1524]'>
			<div className='footer-gridContainer mb-12'>
				<div className='logo mt-6'>
					<img src={Logo} alt='' />
				</div>
				<div className='services'>
					<ul className='footer-list'>
						<li>
							<h1 className='head'>Services</h1>
						</li>
						<li>Infrastructure Solution</li>
						<li>Web and Mobile Solution</li>
						<li>Solution Development</li>
						<li>Consultancy and Support</li>
					</ul>
				</div>
				<div className='quickLinks'>
					<ul className='footer-list'>
						<li>
							<h1 className='head'>Quick Links</h1>
						</li>
						<li>About Us</li>
						<li>Our Services</li>
						<li>Our Work</li>
						<li>Careers</li>
					</ul>
				</div>
				<div className='email'>
					<h1 className='head'>Email Us</h1>
					<p>hello@malonglobal.com</p>
				</div>
				<div className='call'>
					<h1 className='head'>Call Us</h1>
					<p>+123-456-789-01</p>
					<div className='socials my-4'>
						<i className='fa-brands fa-facebook-f'></i>
						<i className='fa-brands fa-twitter'></i>
						<i className='fa-brands fa-instagram'></i>
					</div>
				</div>
			</div>
			<div className='footer-displayItem md:flex md:justify-between'>
				<div className='span my-4 sm:my-0'>
					<Link to='/'>Privacy Policy</Link>
					<Link to='/'>Terms and Conditions</Link>
				</div>
				<p className='copy'>
					{" "}
					Copyright © 2022 Malon Tech. All Rights Reserved
				</p>
			</div>
		</footer>
	);
};
