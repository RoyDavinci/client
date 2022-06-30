import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import UserImg from "../../images/malon/Group 48095445.png";
import Ornament from "../../images/malon/Ornament 21.png";
import Flower from "../../images/malon/Group 48095446.png";

export const Hero = () => {
    return (
        <div className="heroContainer md:p-12 p-4  grid md:grid-cols-2 gap-24">
            <div className="hero-textContainer w-88">
                <h1 className="font-bold text-6xl">
                    We <span>Design, </span> Build and Deploy
                </h1>
                <p className="text-3xl my-8">Leverage Malon's world-class engineering teams to get your ideas and projects up and running quickly</p>
                <div className="btnContainer flex">
                    <button>
                        <Link to="/">Get In Touch</Link>
                    </button>
                    <img src={Ornament} alt="" className="mx-4" />
                </div>
                <img src={Flower} alt="" className="" />
            </div>
            <div className="hero-imgContainer">
                <img src={UserImg} alt="" />
            </div>
        </div>
    );
};
