import React from "react";
import "./portfolio.css";
import Jekawin from "../../images/jekawin.png";
import ChurchVest from "../../images/churchvest.png";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

export const Portfolio = () => {
	const initial = useSelector(defaultState);

	return (
		<div className='portfolioContainer md:p-12 p-4  my-4'>
			<h1
				className={`${
					!initial
						? "text-center text-orange-400 text-4xl"
						: "text-center text-white text-4xl"
				}`}
			>
				Portfolios
			</h1>
			<div className='portfolioImage__container flex md:flex-row flex-col justify-center items-center text-center'>
				<img src={Jekawin} alt='' className='md:p-4 my-4 ' />
				<img src={ChurchVest} alt='' className='md:p-4 my-4' />
			</div>
			<button></button>
		</div>
	);
};
