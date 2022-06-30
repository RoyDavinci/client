import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AdminJobContainer, Sidebar } from "../../components";
import User from "../../images/users/unsplash_8YG31Xn4dSw.png";
import "./jobs.css";

export const Jobs = () => {
	const editJob = () => {
		console.log("edit job");
	};

	const deleteJob = () => {
		console.log("delete job");
	};

	return (
		<div className='adminJobs__container bg-[#F7F6F2] text-[#000]'>
			<div className='adminJobs-sideBarContainer p-12 bg-[#fff] rounded-tl-xl'>
				<Sidebar></Sidebar>
			</div>
			<div className='adminContentContainer p-12'>
				<div className='adminJobContent__notifContainer flex justify-end'>
					<i className='fa-solid fa-magnifying-glass text-2xl mx-2'></i>
					<i className='fa-solid fa-bell text-2xl mx-2'></i>
					<img src={User} alt='' className='rounded-full w-8' />
				</div>
				<>
					<div className='addBlog mr-auto text-right my-4'>
						<button className='px-4 py-2 rounded text-[#fff] text-lg bg-green-600'>
							<Link to='/admin/create/jobs'>Create</Link>
						</button>
					</div>
					<div className='adminContent__detailsContainer'>
						<h1>Jobs</h1>
						<div className='adminContentJobsContainer'>
							<div className='firstadminContentJobsContainer'>
								<AdminJobContainer
									type='FullTime Remote'
									title='FrontEnd Developer'
									deleteJob={deleteJob}
									editJob={editJob}
								></AdminJobContainer>
								<AdminJobContainer
									type='FullTime Remote'
									title='FrontEnd Developer'
									deleteJob={deleteJob}
									editJob={editJob}
								></AdminJobContainer>
								<AdminJobContainer
									type='FullTime Remote'
									title='FrontEnd Developer'
									deleteJob={deleteJob}
									editJob={editJob}
								></AdminJobContainer>
							</div>
						</div>
					</div>
				</>
			</div>
		</div>
	);
};
