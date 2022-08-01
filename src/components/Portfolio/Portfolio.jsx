import React, { useEffect, useState } from "react";
import "./portfolio.css";
import Jekawin from "../../images/jekawin.png";
import ChurchVest from "../../images/churchvest.png";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const data = [Jekawin, ChurchVest];

export const Portfolio = () => {
	const [index, setIndex] = useState(0);
	const [imageData, setImageData] = useState(data[index]);

	const initial = useSelector(defaultState);

	const nextFunction = () => {
		if (index === data.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}

		setImageData(data[index]);
	};

	const prevFunction = () => {
		if (index === 0) {
			setIndex(data.length - 1);
		} else {
			setIndex(index - 1);
		}
		setImageData(data[index]);
	};

	useEffect(() => {
		const myInterval = setInterval(() => {
			if (index === data.length - 1) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
			setImageData(data[index]);
		}, 1000);
		return () => clearInterval(myInterval);
	}, [index]);

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
			<div className='portfolioImage__container flex  justify-center items-center text-center'>
				<i
					className='fa-solid fa-angle-left text-3xl cursor-pointer'
					onClick={prevFunction}
				></i>
				<Link to='/portfolio'>
					<img src={imageData} alt='' className=' ' />
				</Link>
				<i
					className='fa-solid fa-angle-right text-3xl cursor-pointer'
					onClick={nextFunction}
				></i>
				{/* <img src={ChurchVest} alt='' className='md:p-4 my-4' /> */}
			</div>
			<button></button>
		</div>
	);
};
