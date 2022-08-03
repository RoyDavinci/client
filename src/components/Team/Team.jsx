import React, { useState } from "react";
import "./team.css";
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
import RachelFirst from "../..//images/rachel/rachel.jpeg";
import RachelSecond from "../../images/rachel/rachel1.jpeg"
import JoshuaFirst from "../../images/joshua/joshua.jpeg";
import JoshuaSecond from "../../images/joshua/joshua1.jpeg";
import { Link } from "react-router-dom";


const teams = [
	{
		id: 1,
		name: "Oyen Avanrenren",
		title: "Project Manager and Scrum Master",
		image: OyenFirst,
		social: [
			{
				link:"/",
				icon:"fab fa-facebook-f"
			}, 
			{
				link:"https://www.linkedin.com/in/oyen-avanrenren",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-twitter"
			}, 
			{
				link:"https://instagram.com/mz_avans?igshid=YmMyMTA2M2Y=",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: OyenSecond,
	},
	{
		id: 2,
		name: "MAthias Roy",
		title: "FullStack Developer",
		image: RoyFirst,
		social: [
			{
				"facebook":"/",
				icon:"fab fa-facebook-f"
			}, 
			{
				link:"https://www.linkedin.com/in/emmanuel-mathias-0519b6147/",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"https://twitter.com/roydavinci5",
				icon:"fa-brands fa-twitter"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: RoySecond,
	},
	{
		id: 3,
		name: "Kola",
		title: "Mobile App Developer",
		image: KolaFirst,
		social: [
			{
				"facebook":"",
				icon:"fab fa-facebook-f"
			}, 
			{
				link:"https://LinkedIn.com/joshuajumbo91",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"https://twitter.com/blissfuljoe",
				icon:"fa-b fa-twitter"
			}, 
			{
				link:"https://instagram.com/jumbo_joshua",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: KolaSecond,
	},
	{
		id: 4,
		name: "Gladys Glo",
		title: "HR ",
		image: GladysFirst,
		social: [
			{
				"facebook":"",
				icon:"fa-brands fa-facebook-f"
			}, 
			{
				link:"www.linkedin.com/in/gladys-robert-akpan",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"",
				icon:"fa-brands fa-twitter"
			}, 
			{
				link:"",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: GladysSecond,
	},
	{
		id: 5,
		name: "Isaac Warri",
		title: "FrontEnd Developer",
		image: IsaacFirst,
		social: [
			{
				"facebook":"/",
				icon:"fa-brands fa-facebook-f"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"/",
				icon:"fa-brnads fa-twitter"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: IsaacSecond,
	},
	{
		id: 6,
		name: "Emmanuel Chidera",
		title: "Backend Developer",
		image: EmmaunelFirst,
		social: [
			{
				"facebook":"",
				icon:"fab fa-facebook-f",
			}, 
			{
				link:"/",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-twitter"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: EmmanuelSecond,
	},
	{
		id: 7,
		name: "Olamide  Omotere",
		title: "Principal Consultant",
		image: OlamideSecond,
		social: [
			{
				"facebook":"",
				icon:"fab fa-facebook-f"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-twitter"
			}, 
			{
				link:"/",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: OlamideFirst,
	},
	{
		id: 8,
		name: "Raquel",
		title: "Product Designer",
		image: RachelFirst,
		
		social: [
			{
				"facebook":"",
				icon:"fab fa-facebook-f"
			}, 
			{
				link:"https://www.linkedin.com/in/jumokegeorge",
				icon:"fa-brands fa-linkedin"
			}, 
			{
				link:"https://twitter.com/designa_Rakel",
				icon:"fa-brands fa-twitter"
			}, 
			{
				link:"https://instagram.com/jumbo_joshua",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: RachelSecond,
	},
	{
		id: 9,
		name: "Joshua",
		title: "Product Designer",
		image: JoshuaFirst,
		social: [
			{
				"facebook":"",
				icon:"fab fa-facebook-f"
			}, 
			{
				link:"https://LinkedIn.com/joshuajumbo91",
				icon:"fa-brands fa-instagram"
			}, 
			{
				link:"https://twitter.com/blissfuljoe",
				icon:"fa-brands fa-twitter"
			}, 
			{
				link:"https://instagram.com/jumbo_joshua",
				icon:"fa-brands fa-instagram"
			}
		
		],
		secondImage: JoshuaSecond,
	},
];

export const Team = () => {
	const [teamMember, setTeamMember] = useState();

	const onHovered = (id) => {
		setTeamMember(id);
	};
	const onUnHovered = () => {
		setTeamMember(null);
	}

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
							onMouseLeave={onUnHovered}
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
								{team.social.map((social, index) => {
									return (
										<>
											<a
											key={index}
											href={social.link}
											className='teamContainer__socialMedia__items__item'
										>
											<i className={`${social.icon}`}></i>
										</a>
										</>
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
