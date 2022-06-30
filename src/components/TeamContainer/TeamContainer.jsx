import React from "react";
import { Link } from "react-router-dom";
import "./teamContainer.css";

export const TeamContainer = ({ name, title, editTeam, deleteTeam, image }) => {
	return (
		<div className='admin__teamContainer flex justify-between p-4 items-center text-center'>
			<div className='admin__teamContainer__item'>
				<img src={image} alt='' />
				<span>{name}</span>
				<span>{title}</span>
			</div>
			<div className='admin__teamContainer__button'>
				<button
					onClick={() => editTeam()}
					className='px-4 py-2 mr-4 text-[#fff] rounded bg-[#4285F4]'
				>
					<Link to='/admin'>Edit</Link>
				</button>
				<button
					onClick={() => deleteTeam()}
					className='px-4 py-2 mr-4 text-[#fff] rounded bg-[#DB4437]'
				>
					<Link to='/admin'>Delete</Link>
				</button>
			</div>
		</div>
	);
};
