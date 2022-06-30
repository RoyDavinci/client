import React, { useState } from "react";
import "./blogEditContainer.css";

export const BlogEditContainer = () => {
	const [details, setDetails] = useState({
		title: "",
		body: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });
	};
	return (
		<div className='blog__editContainer'>
			<form action=''>
				<div className='blogAdminInput'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name=''
						id='title'
						value={details.title}
						onChange={handleChange}
					/>
				</div>
				<div className='blogAdminInput'>
					<label htmlFor=''>Body</label>
					<textarea
						name=''
						id=''
						cols={12}
						rows={10}
						value={details.body}
						onChange={handleChange}
					></textarea>
				</div>
				<div className='admin__blogContainerButton mx-auto my-0'>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};
