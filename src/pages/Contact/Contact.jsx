import React, { useState } from "react";
import { Button, Footer, Header } from "../../components";
import White from "../../images/white-contact.png";
import Black from "../../images/black-contact.png";
import ContactImage from "../../images/image.png";
import "./contact.css";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { submitContact } from "../../features/api/service/contact";

export const Contact = () => {
	const initial = useSelector(defaultState);
	const dispatch = useDispatch();
	const [contactDetails, setContactDetails] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
		inquiry: "",
		applicationbuild: "",
		budget: "",
	});

	const contactDetail = (e) => {
		const { name, value } = e.target;
		setContactDetails({ ...contactDetails, [name]: value });
	};
	console.log(contactDetails);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { fullName, email, phone, message, inquiry } = contactDetails;
		dispatch(submitContact({ fullName, email, phone, message, inquiry }));
	};

	return (
		<div className='contactUs-container'>
			<div className={`${!initial ? "bg-[#fff]" : "bg-[#040C28] "}`}>
				<div className='headerContact'>
					<Header></Header>
				</div>
				<div className='hero grid md:grid-cols-2 p-4 md:p-12'>
					<div className='heroText w-64'>
						<h1 className='font-bold'>
							Have an idea or feedback? <br /> Let's discuss{" "}
						</h1>
						{/* <p>Thank you for getting in touch!</p> */}
					</div>
					<div className='heroImg'>
						<img src={!initial ? Black : White} alt='' />
					</div>
				</div>
			</div>
			<div
				className={`${
					!initial
						? "bg-[#040c28] talkToUs grid md:grid-cols-2 items-center p-4 md:p-12 text-white"
						: "bg-[#fff] talkToUs grid md:grid-cols-2 items-center p-4 md:p-12 text-black  "
				}`}
			>
				<div className='talkToUs-text items-center text-center flex flex-col'>
					<img src={ContactImage} alt='' />
					<h1>Say Hi!</h1>
					<p>We Will Talk To You</p>
				</div>
				<div className='talkToUs-form'>
					<form
						action=''
						className='border border-[#ccc] rounded-lg p-8'
						onSubmit={handleSubmit}
					>
						<div className='inputItems'>
							<label htmlFor='first-name'>Full Name</label>
							<input
								type='text'
								placeholder='Full Name'
								id='first-name'
								className='border border-[#ccc] p-4'
								value={contactDetails.fullName}
								name='fullName'
								onChange={contactDetail}
							/>
						</div>
						<div className='inputItems'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								placeholder='email'
								id='email'
								className='border border-[#ccc] p-4'
								value={contactDetails.email}
								name='email'
								onChange={contactDetail}
							/>
						</div>
						<div className='inputItems'>
							<label htmlFor='number'>Phone Number</label>
							<input
								type='number'
								placeholder='Phone Number'
								id='number'
								className='border border-[#ccc] p-4'
								value={contactDetails.phone}
								name='phone'
								onChange={contactDetail}
							/>
						</div>
						<div className='selectItems'>
							<label htmlFor='reason'>Reason For Contact</label>
							<select
								name='inquiry'
								id='reason'
								className='p-4'
								value={contactDetails.inquiry}
								onChange={contactDetail}
							>
								<option value=''>Select An Option</option>
								<option value='General Inquiry'>
									General Inquiry/Feedback
								</option>
								<option value='App Build'>Web/Mobile App Build</option>
							</select>
						</div>
						{contactDetails.inquiry === "App Build" ? (
							<div className='inputItems'>
								<label htmlFor='budget'>Budget</label>
								<input
									type='text'
									name='budget'
									id='budget'
									value={contactDetails.budget}
									onChange={contactDetail}
									placeholder='Budget'
									className='p-4'
								/>
							</div>
						) : (
							""
						)}
						{contactDetails.inquiry === "App Build" ? (
							<div className='selectItems'>
								<label htmlFor='application'>Application Type</label>
								<select
									name='applicationbuild'
									id='application'
									className='p-4'
									onChange={contactDetail}
								>
									<option value=''>Pick a Choice</option>
									<option value='web'>Web Application</option>
									<option value='mobile'>Mobile Application</option>
									<option value='web-mobile'>Web andMobile Application</option>
								</select>
							</div>
						) : (
							""
						)}
						<div className='text-area'>
							<label htmlFor='message'>
								{contactDetails.inquiry === "App Build"
									? "Your Brief"
									: "Your Message"}
							</label>
							<textarea
								name='message'
								id=''
								cols={30}
								rows={10}
								placeholder='Type Inquiry'
								value={contactDetails.message}
								onChange={contactDetail}
								className={`${!initial ? "bg-[#040c28]" : "bg-[#fff]"}`}
							></textarea>
						</div>
						<div className='text-center my-4'>
							<Button detail='Submit'></Button>
						</div>
					</form>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
