import React, { useState } from "react";
import "./team.css";
import FirstImage from "../../images/users/unsplash_8YG31Xn4dSw.png";
import SecondImage from "../../images/users/unsplash_A3MleA0jtoE.png";
import ThirdImage from "../../images/users/unsplash_ABuzWPku1Ug.png";

const team = [
	{
		id: 1,
		name: "John Doe",
		title: "CEO and Founder",
		image: ThirdImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
	{
		id: 2,
		name: "John Doe",
		title: "CEO and Founder",
		image: FirstImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
	{
		id: 3,
		name: "John Doe",
		title: "CEO and Founder",
		image: SecondImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
	{
		id: 4,
		name: "John Doe",
		title: "CEO and Founder",
		image: ThirdImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
	{
		id: 5,
		name: "John Doe",
		title: "CEO and Founder",
		image: FirstImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
	{
		id: 6,
		name: "John Doe",
		title: "CEO and Founder",
		image: SecondImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
	{
		id: 7,
		name: "John Doe",
		title: "CEO and Founder",
		image: ThirdImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
	{
		id: 8,
		name: "John Doe",
		title: "CEO and Founder",
		image: FirstImage,
		social: ["facebook", "linkedin", "twitter", "instagram"],
	},
];

export const Team = () => {
	const [member, setMember] = useState([]);

	const handleHover = (index) => {
		const element = team.find((item) => item.id === index);
		if (element) {
			if (member.length > 0) {
				member.pop();
			}
			setMember([element]);
		}
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
			<div
				className={
					member.length === 0
						? "teamContainer-detailsContainer"
						: "teamContainer-detailsContainer"
				}
			>
				{member.length === 0
					? team.map((team) => {
							return (
								<div
									key={team.id}
									className={`${
										team.id % 2 === 0
											? "team-imageContainer-item margin cursor-pointer"
											: "team-imageContainer-item cursor-pointer"
									}`}
									onMouseEnter={() => handleHover(team.id)}
								>
									<img src={team.image} alt='' className='sm:my-4' />
								</div>
							);
					  })
					: member.map((person) => {
							return (
								<div key={person.id} className='owner'>
									<div className='outer'>
										<div className='middle'>
											<div className='inner'>
												<img src={person.image} alt='' />
											</div>
										</div>
									</div>
									<div className='detail my-4 text-2xl'>
										<p>{person.name}</p>
										<p>{person.title}</p>
									</div>
									<div className='social'>
										{person.social.map((item, id) => {
											return (
												<i
													key={id}
													className={`fa-brands fa-${item} cursor-pointer`}
												></i>
											);
										})}
									</div>
								</div>
							);
					  })}
			</div>
		</div>
	);
};
