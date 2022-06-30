import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const StateContext = React.createContext();

const StateProvider = ({ children }) => {
    const [state, setState] = useState(false);
    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState();
    const [user, setUser] = useState();

    const changeState = () => {
        setState(!state);
    };

    const setAdminStatus = () => {
        const item = localStorage.getItem("user");
        if (item && item !== "undefined") {
            const datum = JSON.parse(item);
            setAdmin(datum);
        }
    };

    useEffect(() => {
        setAdminStatus();

        return () => {
            console.log("admin");
        };
    }, []);

    // call this function when you want to authenticate the user
    const login = async (email, password) => {
        try {
            const { data } = await axios.post("http://localhost:8100/api/v1/login", { email, password });
            return data;
        } catch (error) {
            return error;
        }
    };

    return <StateContext.Provider value={{ changeState, state, login, user, setUser, admin, setAdmin, success, setSuccess }}>{children}</StateContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(StateContext);
};

export { StateContext, StateProvider };
