import React, { useEffect, useState } from "react";
import { AdminJobContainer, BlogContainer, Sidebar } from "../../components";
import "./admin.css";
import User from "../../images/users/unsplash_8YG31Xn4dSw.png";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../features/api/jobs/jobs";

export const Admin = () => {
	const [details, setDetails] = useState(false);
	const [allJobs, setAllJobs] = useState([]);
	const dispatch = useDispatch();
	const jobs = useSelector((state) => state.jobs.jobs);

	// console.log(allJobs);

	useEffect(() => {
		dispatch(getJobs());
		// setAllJobs(jobs[0].data);
	}, [dispatch, jobs]);

	const editJob = () => {
		setDetails(!details);
		console.log("edit job");
	};

	const deleteJob = () => {
		console.log("delete job");
	};
	const editBlog = () => {
		console.log("edit Blog");
	};

	const deleteBlog = () => {
		console.log("delete Blog");
	};

	return (
		<div
			className={
				details
					? "adminContainer z-0 bg-[#F7F6F2] text-[#000] relative"
					: "adminContainer z-0 bg-[#F7F6F2] text-[#000] relative"
			}
		>
			<div className='admin-sideBarContainer p-12 bg-[#fff] rounded-tl-xl'>
				<Sidebar></Sidebar>
			</div>
			<div className='adminContentContainer p-12'>
				<div className='adminContent__notifContainer flex justify-end'>
					<i className='fa-solid fa-magnifying-glass text-2xl mx-2'></i>
					<i className='fa-solid fa-bell text-2xl mx-2'></i>
					<img src={User} alt='' className='rounded-full w-8' />
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
					<h1>What's New</h1>
					<div className='adminContentBlogContainer'>
						<BlogContainer
							title='Jekawin'
							body='Welcome to Our New Page For Hosting Jekawin'
							deleteBlog={deleteBlog}
							editBlog={editBlog}
						></BlogContainer>
						<BlogContainer
							title='Jekawin'
							body='Welcome to Our New Page For Hosting Jekawin'
							deleteBlog={deleteBlog}
							editBlog={editBlog}
						></BlogContainer>
						<BlogContainer
							title='Jekawin'
							body='Welcome to Our New Page For Hosting Jekawin'
							deleteBlog={deleteBlog}
							editBlog={editBlog}
						></BlogContainer>
					</div>
				</div>
			</div>
		</div>
	);
};
