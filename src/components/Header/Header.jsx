import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/malon/logo2.png";
import LogoWhite from "../../images/malon/logo.png";
import "./header.css";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

export const Header = () => {
	const initial = useSelector(defaultState);

	const [show, setShow] = useState(false);

	return (
		<div className='headerContainer md:px-12 px-6 py-6'>
			<div className='header-logoContainer sm:flex sm:justify-between'>
				<Link to='/'>
					<img src={!initial ? Logo : LogoWhite} alt='' />
				</Link>
				<i
					className='fa-solid fa-bars click text-[30px]'
					onClick={() => setShow(true)}
				></i>
			</div>
			<div className='header-linkContainer'>
				<ul className={!show ? "listItems hide" : "listItems show text-[#000]"}>
					<li className='firstList__item'>
						<i
							className='fa-solid fa-xmark text-[30px] my-8'
							onClick={() => setShow(false)}
						></i>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link to='/'>About Us</Link>
					</li>
					<li>
						<button>
							<Link to='/contact-us'>Get In Touch</Link>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
