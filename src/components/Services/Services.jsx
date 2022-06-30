import React from "react";
import "./services.css";
import Infrastructure from "../../images/ervices/technical-support.png";
import Web from "../../images/ervices/application.png";
import Development from "../../images/ervices/coding.png";
import Consultancy from "../../images/ervices/customer-service.png";
import { defaultState } from "../../features/state/stateSlice";
import { useSelector } from "react-redux";

export const Services = () => {
    const initial = useSelector(defaultState);

    return (
        <div className="servicesContainer p-12  my-4 flex flex-col items-center justify-center">
            <h1 className={`${!initial ? "text-[#FD7E14]" : ""}`}>Our Services</h1>
            <div className="services-gridContainer grid md:grid-cols-2 gap-28 text-center items-center">
                <section className={`${!initial ? "services-gridItem bg-[#FFFEE7] sm:w-88" : "services-gridItem bg-[#1e3359] sm:w-88"}`}>
                    <img src={Infrastructure} alt="" />
                    <h3>Infrastructure Solution and Services</h3>
                </section>
                <section className={`${!initial ? "services-gridItem bg-[#FFFEE7]" : "services-gridItem bg-[#1e3359]"}`}>
                    <img src={Web} alt="" />
                    <h3>Web and Mobile Solutions</h3>
                </section>
                <section className={`${!initial ? "services-gridItem bg-[#FFFEE7]" : "services-gridItem bg-[#1e3359]"}`}>
                    <img src={Development} alt="" />
                    <h3>Solution Development</h3>
                </section>
                <section className={`${!initial ? "services-gridItem bg-[#FFFEE7]" : "services-gridItem bg-[#1e3359]"}`}>
                    <img src={Consultancy} alt="" />
                    <h3>It Consultancy and Support</h3>
                </section>
            </div>
        </div>
    );
};
