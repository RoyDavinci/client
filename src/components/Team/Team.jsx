import React, { useState } from "react";
import "./team.css";
import FirstImage from "../../images/users/unsplash_8YG31Xn4dSw.png";
import SecondImage from "../../images/users/unsplash_A3MleA0jtoE.png";
import ThirdImage from "../../images/users/unsplash_ABuzWPku1Ug.png";
import OyenFirst from "../../images/oyen/oyen.jpg";
import OyenSecond from "../../images/oyen/oyen1.jpg";
import EmmaunelFirst from "../../images/emmanuel/emmanuel.jpg";
import EmmanuelSecond from "../../images/emmanuel/emmanuel1.jpg";

const teams = [
	{
		id: 1,
		name: "Oyen Avanrenren",
		title: "Project/Product Manager and Scrum Master",
		image: OyenFirst,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: OyenSecond,
	},
	{
		id: 2,
		name: "John Doe",
		title: "CEO and Founder",
		image: FirstImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: ThirdImage,
	},
	{
		id: 3,
		name: "John Doe",
		title: "CEO and Founder",
		image: SecondImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: FirstImage,
	},
	{
		id: 4,
		name: "John Doe",
		title: "CEO and Founder",
		image: ThirdImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: FirstImage,
	},
	{
		id: 5,
		name: "John Doe",
		title: "CEO and Founder",
		image: FirstImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: ThirdImage,
	},
	{
		id: 6,
		name: "Emmanuel Chidera",
		title: "Backend Developer",
		image: EmmaunelFirst,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: EmmanuelSecond,
	},
	{
		id: 7,
		name: "John Doe",
		title: "CEO and Founder",
		image: ThirdImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: SecondImage,
	},
	{
		id: 8,
		name: "John Doe",
		title: "CEO and Founder",
		image: FirstImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: ThirdImage,
	},
];

export const Team = () => {
	const [teamMember, setTeamMember] = useState();

	const onHovered = (id) => {
		setTeamMember(id);
	};

	return (
		<div className='p-12 text-center bg-[#041243] text-[#fff]'>
			<h1>
				<span>~</span> Team <span>~</span>
			</h1>
			<p className='my-4 team-text'>
				We love what we do and we do it with passion. We value the
				experimentation of the message and smart incentives.
			</p>
			<div className='teamContainer-detailsContainer'>
				{teams.map((team, index) => {
					return (
						<div
							key={team.id}
							className={`${
								team.id % 2 === 0
									? "team-imageContainer-item cursor-pointer"
									: "team-imageContainer-item cursor-pointer"
							}`}
							onMouseEnter={() => onHovered(index)}
						>
							<div className='teamMember__imageContainerPerson'>
								<img
									src={teamMember === index ? team.secondImage : team.image}
									alt=''
									className=''
								/>
							</div>
							<div
								className={
									teamMember === index
										? "teanContainer__detailsContainer__person teamShow"
										: "teanContainer__detailsContainer__person teamHide"
								}
							>
								<p className='teamMember__namePerson'>{team.name}</p>
								<p className='teamMember__nameTitle'>{team.title}</p>
							</div>
							<div
								className={
									teamMember === index
										? "teamContainer__socialMedia__items teamShow"
										: "teamContainer__socialMedia__items teamHide"
								}
							>
								<i className='fa-brands fa-linkedin'></i>
								<i className='fa-brands fa-twitter'></i>
								<i className='fa-brands fa-instagram'></i>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
