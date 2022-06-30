import React, { useState, useEffect } from "react";
import { Footer, Button, Header } from "../../components";
import HeroImage from "../../images/headers.png";
import Laptop from "../../images/laptop.png";
import "./career.css";
import Dropzone from "react-dropzone";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

const data = [
	{
		id: 1,
		title: "FrontEnd Developer",
		location: "Lagos",
		type: "Full Time",
		benefits:
			"Healthcare benefits will be provided for full-time hires. Senior roles also available",
		description:
			"Experience working remotely; strong communication skills; Knowledge of HTML, JavaScript, and CSS; Knowledge of React tools including redux; Working knowledge of REST APIs; Knowledge of any CSS framework - Boostrap and Tailwind; Knowledge of JS testing frameworks including Mocha and Jest is a plus",
	},
	{
		id: 2,
		title: "FrontEnd Developer",
		location: "Lagos",
		type: "Full Time",
		benefits:
			"Healthcare benefits will be provided for full-time hires. Senior roles also available",
		description:
			"Experience working remotely; strong communication skills; Knowledge of HTML, JavaScript, and CSS; Knowledge of React tools including redux; Working knowledge of REST APIs; Knowledge of any CSS framework - Boostrap and Tailwind; Knowledge of JS testing frameworks including Mocha and Jest is a plus",
	},
	{
		id: 3,
		title: "FrontEnd Developer",
		location: "Lagos",
		type: "Full Time",
		benefits:
			"Healthcare benefits will be provided for full-time hires. Senior roles also available",
		description:
			"Experience working remotely; strong communication skills; Knowledge of HTML, JavaScript, and CSS; Knowledge of React tools including redux; Working knowledge of REST APIs; Knowledge of any CSS framework - Boostrap and Tailwind; Knowledge of JS testing frameworks including Mocha and Jest is a plus",
	},
	{
		id: 4,
		title: "FrontEnd Developer",
		location: "Lagos",
		type: "Full Time",
		benefits:
			"Healthcare benefits will be provided for full-time hires. Senior roles also available",
		description:
			"Experience working remotely; strong communication skills; Knowledge of HTML, JavaScript, and CSS; Knowledge of React tools including redux; Working knowledge of REST APIs; Knowledge of any CSS framework - Boostrap and Tailwind; Knowledge of JS testing frameworks including Mocha and Jest is a plus",
	},
	{
		id: 5,
		title: "FrontEnd Developer",
		location: "Lagos",
		type: "Full Time",
		benefits:
			"Healthcare benefits will be provided for full-time hires. Senior roles also available",
		description:
			"Experience working remotely; strong communication skills; Knowledge of HTML, JavaScript, and CSS; Knowledge of React tools including redux; Working knowledge of REST APIs; Knowledge of any CSS framework - Boostrap and Tailwind; Knowledge of JS testing frameworks including Mocha and Jest is a plus",
	},
];

export const Career = () => {
	const [positions, setPositions] = useState([]);
	const [details, setDetails] = useState([]);

	const initial = useSelector(defaultState);

	const handleClick = (index) => {
		const arr = positions?.find((item) => item.id === index);
		if (arr) {
			if (details.length > 0) {
				details.pop();
				setDetails([arr]);
			} else {
				setDetails([arr]);
			}
		}
	};

	useEffect(() => {
		setPositions(data);
	}, []);

	return (
		<div className='career__ContainerItems'>
			<Header></Header>
			<div className='hero-Image'>
				<img src={HeroImage} alt='' />
			</div>
			{details.length > 0 ? (
				<div className='applyContainer p-4 md:p-12'>
					<div className='role'>
						<button>
							<i className='fa-solid fa-back'></i>
						</button>
						<h1>FrontEnd Developer</h1>
						{details.map((detail) => {
							return (
								<>
									<div className='role-item flex'>
										<div
											className={`${
												!initial
													? "flex  mx-4 bg-[#eeeeee]"
													: "flex  mx-4 bg-[#1e3359]"
											}`}
										>
											<i className='fa-solid fa-business-time mr-4'></i>
											{detail.type}
										</div>
										<div
											className={`${
												!initial
													? "flex  mx-4 bg-[#eeeeee]"
													: "flex  mx-4 bg-[#1e3359]"
											}`}
										>
											<i className='fa-solid fa-location-dot mr-4'></i>
											{detail.location}
										</div>
									</div>
									<div className='roleAbout-container'>
										<h2 className='my-4'>About The Position</h2>
										<p className='my-2'>
											Looking for developers, who are eager to work on something
											impactful and care about top design quality{" "}
										</p>
										<ul className='leading-6'>
											{detail.description.split(";").map((benefit, index) => {
												return <li key={index}>{benefit}</li>;
											})}
										</ul>
										<p>
											Healthcare benefits will be provided for full-time hires.
											Senior roles also available
										</p>
									</div>
								</>
							);
						})}
					</div>
					<div className='form'>
						<form
							action=''
							className='border border-neutral-400 p-4 md:p-8 rounded-lg'
						>
							<div className='inputContainer'>
								<label htmlFor='first name'>First Name</label>
								<div className='input-control'>
									<input
										type='text'
										className=''
										placeholder='First Name'
										id='first name'
									/>
								</div>
							</div>
							<div className='inputContainer'>
								<label htmlFor='last name'>Last Name</label>
								<div className='input-control'>
									<input
										type='text'
										className=''
										placeholder='Last Name'
										id='last name'
									/>
								</div>
							</div>
							<div className='inputContainer'>
								<label htmlFor='email'>Email</label>
								<div className='input-control'>
									<input type='email' name='' id='email' placeholder='Email' />
								</div>
							</div>
							<div className='container inputContainer'>
								<label htmlFor='phone'>Phone Number</label>
								<div className='input-control'>
									<input
										type='number'
										name=''
										id='phone'
										placeholder='Phone Number'
									/>
								</div>
							</div>

							<div className='portfoliolinks inputContainer'>
								<label htmlFor=''>Portfolio</label>
								<div className='input-control'>
									<input type='text' />
									<i
										className={
											!initial
												? "bg-[#434452] text-[#fff] fa-solid fa-plus"
												: "bg-[#fff] text-[#000] fa-solid fa-plus"
										}
									></i>
								</div>
							</div>
							<div className='sociallinks inputContainer'>
								<label htmlFor=''>Social Media Links</label>
								<div className='input-control'>
									<input type='text' />
									<i
										className={
											!initial
												? "bg-[#434452] text-[#fff] fa-solid fa-plus"
												: "bg-[#fff] text-[#000] fa-solid fa-plus"
										}
									></i>
								</div>
							</div>
							<label htmlFor='letter'>Cover Letter</label>
							<textarea
								name=''
								id='letter'
								cols={30}
								rows={10}
								placeholder='Attach Your Cover Letter'
								className={`${!initial ? "bg-[#fff]" : "bg-[#040c28]"}`}
							></textarea>
							<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
								{({ getRootProps, getInputProps }) => (
									<>
										<p className='mb-4'>Resume</p>
										<section className='section-file p-12 border border-[#ccc] text-center flex items-center justify-center rounded-lg'>
											<div
												{...getRootProps()}
												className='p-8 border-dashed border rounded-lg'
											>
												<input {...getInputProps()} />
												<i className='fa-solid fa-file-invoice'></i>
												<p>Upload Your Document</p>
											</div>
										</section>
									</>
								)}
							</Dropzone>
						</form>
						<div className='text-center my-4'>
							<Button detail='Submit'></Button>
						</div>
					</div>
				</div>
			) : (
				<div className='workingContainer p-4 md:p-12'>
					<img src='' alt='' />
					<div className='working-Grid grid md:grid-cols-2 md:gap-24'>
						<div className='working-gricContainer'>
							<h2 className=''>Open Positions</h2>
							<div className='about-working'>
								<p className={`${!initial ? "bg-[#eeeeee]" : "bg-[#1e3359]"}`}>
									<i className='fa-solid fa-file'></i>
									<span>Innovative Tech Experience</span>
								</p>
								<p className={`${!initial ? "bg-[#eeeeee]" : "bg-[#1e3359]"}`}>
									<i className='fa-solid fa-user-group'></i>
									<span>5-20 People</span>
								</p>
							</div>
							<h1>Working At Malon</h1>
							<p className='mb-4 '>
								Malon is looking for world class talent ready to tackle
								challenging projects that will ultimately build everyday
								lifestyle technology with the aim to simplify processes. thus
								improving systems or human lifespans, and increasing efficiency
							</p>
							<img src={Laptop} alt='' className='roundClass' />
						</div>
						<div className='position-container'>
							{positions?.map((item) => {
								return (
									<div
										key={item.id}
										onClick={() => handleClick(item.id)}
										className='positionITemContainer mb-4 p-4 border border-neutral-400	 rounded-xl cursor-pointer'
									>
										<h1>{item.title}</h1>
										<span
											className={`${
												!initial ? "bg-[#eeeeee]" : "bg-[#1e3359]"
											}`}
										>
											<i className='fa-solid fa-business-time'></i>
											Full Time
										</span>
										<span
											className={`${
												!initial ? "bg-[#eeeeee]" : "bg-[#1e3359]"
											}`}
										>
											<i className='fa-solid fa-location-dot'></i>
											Lagos
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
			<Footer></Footer>
		</div>
	);
};
