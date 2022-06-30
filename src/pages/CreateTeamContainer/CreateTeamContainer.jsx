import React from "react";
import { Sidebar } from "../../components";
import User from "../../images/users/unsplash_8YG31Xn4dSw.png";
import "./createTeamContainer.css";

export const CreateTeamContainer = () => {
	return (
		<div className='admin__CreateTeamContainer'>
			<div className='admin__createrContainer p-12'>
				<Sidebar></Sidebar>
			</div>
			<div className='admin__createContainer__item p-12'>
				<div className='adminBlogContent__notifContainer flex justify-end'>
					<i className='fa-solid fa-magnifying-glass text-2xl mx-2'></i>
					<i className='fa-solid fa-bell text-2xl mx-2'></i>
					<img src={User} alt='' className='rounded-full w-8' />
				</div>
				<div className='admin__CreateTeamContainer__user'>
					<form action='' className='admin__CreateTeamContainer__form'>
						<div className='team__createInput'>
							<label htmlFor='type'>Type</label>
							<input type='text' value='' id='type' required name='type' />
						</div>
						<div className='team__createInput'>
							<label htmlFor='title'>Title</label>
							<input type='text' value='' id='title' required name='title' />
						</div>
						<div className='team__createInput'>
							<label htmlFor='benefits'>Benefits</label>
							<textarea
								name='benefits'
								id='benefits'
								cols={30}
								rows={10}
							></textarea>
						</div>
						<div className='team__createInput'>
							<label htmlFor='description'>Descriptions</label>
							<textarea name='' id='description' cols={30} rows={10}></textarea>
						</div>
						<div className='team__createButton'>
							<button>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
