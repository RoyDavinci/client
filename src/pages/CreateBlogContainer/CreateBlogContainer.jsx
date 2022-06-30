import React from "react";
import { Sidebar } from "../../components";
import User from "../../images/users/unsplash_8YG31Xn4dSw.png";
import "./createBlogContainer.css";

export const CreateBlogContainer = () => {
	return (
		<div className='admin__createBlogContainer'>
			<div className='admincreateBlog-sideBarContainer p-12 bg-[#fff] rounded-tl-xl'>
				<Sidebar></Sidebar>
			</div>
			<div className='admin__createBlogFormContainer p-12'>
				<div className='adminBlogContent__notifContainer flex justify-end'>
					<i className='fa-solid fa-magnifying-glass text-2xl mx-2'></i>
					<i className='fa-solid fa-bell text-2xl mx-2'></i>
					<img src={User} alt='' className='rounded-full w-8' />
				</div>
				<form action=''>
					<div className='admin__createBlogContainer__input'>
						<label htmlFor='title'>Title</label>
						<input type='text' name='title' id='title' value='' />
					</div>
					<div className='admin__createBlogContainer__input'>
						<label htmlFor='body'>Body/Text</label>
						<textarea
							name='body'
							id='body'
							cols='30'
							rows='10'
							value=''
						></textarea>
					</div>
					<div className='admin__createBlogContainer__button'>
						<button>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};
