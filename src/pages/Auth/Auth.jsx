import React, { useState } from "react";
import Logo from "../../images/malon/logo2.png";
import LogoWhite from "../../images/malon/logo.png";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { adminSignIn } from "../../features/api/auth/tokenSlice";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { useEffect } from "react";

export const Auth = () => {
    const [login, setLogin] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const initial = useSelector(defaultState);
    const status = useSelector((state) => state.login.status);
    const token = useSelector((state) => state.login.token);
    const errorData = useSelector((state) => state.login.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };
    useEffect(() => {
        const handleData = () => {
            if (status === "idle") {
                console.log("idle");
            } else if (status === "loading") {
                console.log("loading");
            } else if (status === "succeeded") {
                navigate("/admin");
            } else {
                setError(errorData);
            }
        };
        handleData();
    }, [errorData, status, token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = login.email;
        const password = login.password;
        console.log(password);
        dispatch(adminSignIn({ email, password }));
    };

    return (
        <div className="authContainer">
            <div className="authContainer__form p-8 border border-green">
                <div className="authContainer__formImage text-center flex items-center justify-center">
                    <img src={!initial ? Logo : LogoWhite} alt="" />
                </div>
                <form action="" className="authContainer__formElement" onSubmit={handleSubmit}>
                    <div className="adminFormComponent">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={login.email} onChange={handleChange} required />
                    </div>
                    <div className="adminFormComponent">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={login.password} onChange={handleChange} required />
                        <small className="my-12 text-lg">{error ? error : ""}</small>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};
