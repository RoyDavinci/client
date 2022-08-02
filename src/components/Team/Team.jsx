import React, { useState } from "react";
import "./team.css";
import FirstImage from "../../images/users/unsplash_8YG31Xn4dSw.png";
import ThirdImage from "../../images/users/unsplash_ABuzWPku1Ug.png";
import OyenFirst from "../../images/oyen/oyen.JPG";
import OyenSecond from "../../images/oyen/FDF91F93-CDE5-4516-B470-B271AC92A7D7.JPG";
import EmmaunelFirst from "../../images/emmanuel/emmanuel2.JPG";
import EmmanuelSecond from "../../images/emmanuel/photo_2022-08-01_15-20-21.jpg";
import KolaFirst from "../../images/kola/kola.PNG";
import KolaSecond from "../../images/kola/photo_2022-08-01_15-16-06.jpg";
import GladysFirst from "../../images/gladys/photo_2022-08-01_15-29-35.jpg";
import GladysSecond from "../../images/gladys/gladys2.jpg";
import RoyFirst from "../../images/roy/photo_2022-08-01_15-17-45.jpg";
import RoySecond from "../../images/roy/photo_2022-08-01_15-17-45.jpg";
import IsaacFirst from "../../images/isaac/isaac.jpg";
import IsaacSecond from "../../images/isaac/isaac1.HEIC";
import OlamideFirst from "../../images/olamide/3ACF9F54-0E12-427A-94B9-F1EC0224EB6C.JPG";
import OlamideSecond from "../../images/olamide/photo_2022-08-01_15-25-24.jpg";

const teams = [
	{
		id: 1,
		name: "Oyen Avanrenren",
		title: "Project Manager and Scrum Master",
		image: OyenFirst,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: OyenSecond,
	},
	{
		id: 2,
		name: "MAthias Roy",
		title: "FullStack Developer",
		image: RoyFirst,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: RoySecond,
	},
	{
		id: 3,
		name: "Kola",
		title: "Mobile App Developer",
		image: KolaFirst,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: KolaSecond,
	},
	{
		id: 4,
		name: "Gladys Glo",
		title: "HR ",
		image: GladysFirst,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: GladysSecond,
	},
	{
		id: 5,
		name: "Isaac Warri",
		title: "FrontEnd Developer",
		image: IsaacFirst,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: IsaacSecond,
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
		name: "Olamide  Omotere",
		title: "Principal Consultant",
		image: OlamideSecond,
		social: ["facebook", "linkedin", "twitter", "instagram"],
		secondImage: OlamideFirst,
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
								<div className='teamMember__personContainer'>
									<p className='teamMember__namePerson'>{team.name}</p>
									<p className='teamMember__nameTitle'>{team.title}</p>
								</div>
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
