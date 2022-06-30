import React from "react";
import { Hero, About, Services, Portfolio, Team, Footer, Button, Header } from "../../components";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

export const Home = () => {
    const initial = useSelector(defaultState);

    return (
        <div className="">
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
            <Team></Team>
            <div className={`${!initial ? "project p-8  bg-[#fff]  text-[#000]" : "project [bg-[#040C28] p-8  text-[#000]"}`}>
                <div className={`${!initial ? "projectText md:flex justify-center py-4 px-8  items-center text-center rounded-2xl" : "px-8 py-4 projectText md:flex justify-center items-center text-center bg-[#fff] rounded-2xl"}`}>
                    <h1 className="md:mx-4">Do You Have A Project In Mind? </h1>
                    <Button detail="Get In Touch"></Button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
