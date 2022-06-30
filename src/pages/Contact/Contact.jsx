import React from "react";
import { Button, Footer, Header } from "../../components";
import White from "../../images/white-contact.png";
import Black from "../../images/black-contact.png";
import ContactImage from "../../images/image.png";
import "./contact.css";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

export const Contact = () => {
	const initial = useSelector(defaultState);

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
						<p>Thank you for getting in touch!</p>
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
					<form action='' className='border border-[#ccc] rounded-lg p-8'>
						<div className='inputItems'>
							<label htmlFor='first-name'>First Name</label>
							<input
								type='text'
								placeholder='first Name'
								id='first-name'
								className='border border-[#ccc] p-4'
							/>
						</div>
						<div className='inputItems'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								placeholder='email'
								id='email'
								className='border border-[#ccc] p-4'
							/>
						</div>
						<div className='inputItems'>
							<label htmlFor='number'>Phone Number</label>
							<input
								type='number'
								placeholder='Phone Number'
								id='number'
								className='border border-[#ccc] p-4'
							/>
						</div>
						<div className='selectItems'>
							<label htmlFor='reason'>Reason For Contact</label>
							<select name='' id='reason' className='p-4'>
								<option value=''>General Inquiry/Feedback</option>
							</select>
						</div>
						<div className='text-area'>
							<label htmlFor='message'>Your Message</label>
							<textarea
								name=''
								id=''
								cols={30}
								rows={10}
								placeholder='Type Inquiry'
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
