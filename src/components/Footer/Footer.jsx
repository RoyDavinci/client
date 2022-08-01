import React from "react";
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
							<h1 className='head'>Other Links</h1>
						</li>
						<li>Piracy Policy</li>
						<li>Terms of Conditions</li>
						<li>Mode of Opertion</li>
						<li>Consultancy and Support</li>
					</ul>
				</div>
				<div className='quickLinks'>
					<ul className='footer-list'>
						<li>
							<h1 className='head'>Quick Links</h1>
						</li>
						<li>About Us</li>
						<li>Services</li>
						<li>
							<Link to='/portfolio'>Portfolios</Link>
						</li>
						<li>
							<Link to='/careers'>Careers</Link>
						</li>
						<li>
							<Link to='/'>What's New</Link>
						</li>
					</ul>
				</div>
				<div className='email'>
					<h1 className='head'>Contact Us</h1>
					<p>- info@malonglobaltech.com</p>
					<p>- 07026997992</p>
					<div className='socials my-4'>
						<i className='fa-brands fa-facebook-f'></i>
						<i className='fa-brands fa-twitter'></i>
						<i className='fa-brands fa-instagram'></i>
					</div>
				</div>
			</div>
			<div className='footer-displayItem md:flex '>
				<div className='span my-4 sm:my-0'>
					<Link to='/'>Privacy Policy</Link>
					<Link to='/'>Terms and Conditions</Link>
				</div>
				<p className='copy'>Copyright © 2022 Malon Tech. All Rights Reserved</p>
			</div>
		</footer>
	);
};
