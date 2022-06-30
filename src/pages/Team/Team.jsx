import React from "react";
import { Link } from "react-router-dom";
import { TeamContainer, Sidebar, BlogEditContainer } from "../../components";
import User from "../../images/users/unsplash_8YG31Xn4dSw.png";
import "./team.css";

export const Team = () => {
	const editBlog = () => {
		console.log("edit job");
	};

	const deleteBlog = () => {
		console.log("delete job");
	};

	return (
		<div className='adminBlog__Container'>
			<div className='adminBlog__container bg-[#F7F6F2] text-[#000]'>
				<div className='adminBlog-sideBarContainer p-12 bg-[#fff] rounded-tl-xl'>
					<Sidebar></Sidebar>
				</div>
				<div className='adminBlogContentContainer p-12'>
					<div className='adminBlogContent__notifContainer flex justify-end'>
						<i className='fa-solid fa-magnifying-glass text-2xl mx-2'></i>
						<i className='fa-solid fa-bell text-2xl mx-2'></i>
						<img src={User} alt='' className='rounded-full w-8' />
					</div>
					<div className='addBlog mr-auto text-right my-4'>
						<button className='px-4 py-2 rounded text-[#fff] text-lg bg-green-600'>
							<Link to='/admin/team/create'>Create</Link>
						</button>
					</div>
					<div className='adminContentBlogContainer'>
						<TeamContainer
							name='Jekawin'
							title='CEO'
							deleteBlog={deleteBlog}
							editBlog={editBlog}
							image={User}
						></TeamContainer>
						<TeamContainer
							name='Jekawin'
							title='CEO'
							deleteBlog={deleteBlog}
							editBlog={editBlog}
							image={User}
						></TeamContainer>
						<TeamContainer
							name='Jekawin'
							title='CEO'
							deleteBlog={deleteBlog}
							editBlog={editBlog}
							image={User}
						></TeamContainer>
					</div>
				</div>
			</div>
		</div>
	);
};
