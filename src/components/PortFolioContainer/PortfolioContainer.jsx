import React from "react";
import "./portfoliocontainer.css";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

export const PortfolioContainer = ({
	image,
	title,
	overview,
	overview2,
	link,
}) => {
	const initial = useSelector(defaultState);

	return (
		<div className='portfolioItemContainer my-8'>
			<img src={image} alt='' />
			<h1 className='font-extrabold '>{title}</h1>
			<h2 className='font-bold my-4 '>
				Project <span className='text-orange-400'>Overview</span>
			</h2>
			<p className='font-normal mb-8'>{overview}</p>
			<p className='font-normal '>{overview2}</p>

			<button
				className={`${
					!initial
						? "bg-[#1E3359] my-4 text-white "
						: "bg-[#fff] text-orange-400 my-4"
				}`}
			>
				{link}
			</button>
		</div>
	);
};
