import React, { useEffect, useState } from "react";
import "./App.css";
import {
	Career,
	Contact,
	Home,
	Portfolio,
	Admin,
	Jobs,
	Blog,
	Auth,
	CreateTeamContainer,
	Team,
	BlogEditContainer,
} from "./pages";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { changeState, defaultState } from "./features/state/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { CreateBlogContainer } from "./pages/CreateBlogContainer/CreateBlogContainer";

function App() {
	const dispatch = useDispatch();
	const initial = useSelector(defaultState);

	return (
		<div
			className={`${
				!initial ? "App bg-[#fff] text-black" : "App bg-[#040C28] text-[#fff]"
			}`}
		>
			<Routes>
				<Route exact path='/' element={<Home />}></Route>
				<Route path='/careers' element={<Career />}></Route>
				<Route path='/contact-us' element={<Contact />}></Route>
				<Route path='/portfolio' element={<Portfolio />}></Route>
				<Route path='/admin' element={<Admin />}></Route>
				<Route path='/admin/jobs' element={<Jobs></Jobs>}></Route>
				<Route path='/admin/whats-new' element={<Blog />}></Route>
				<Route path='/admin/team' element={<Team></Team>}></Route>
				<Route
					path='/admin/team/create'
					element={<CreateTeamContainer />}
				></Route>
				<Route
					path='/admin/blog/create'
					element={<CreateBlogContainer />}
				></Route>
				<Route
					path='/admin/create/jobs'
					element={<CreateTeamContainer></CreateTeamContainer>}
				></Route>
				<Route path='/admin/login' element={<Auth />}></Route>
			</Routes>
			<div className='switchContainer'>
				<label className='switch'>
					<input type='checkbox' onClick={() => dispatch(changeState())} />
					<span className='slider round'></span>
				</label>
			</div>
		</div>
	);
}

export default App;
