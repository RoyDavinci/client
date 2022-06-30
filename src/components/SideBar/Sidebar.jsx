import React from "react";
import Logo from "../../images/malon/logo2.png";
import { SidebarModule } from "../SideBarModule/SidebarModule";

export const Sidebar = () => {
    return (
        <div className="sidebarContainer text-md mb-4">
            <div className="adminSidebar__imageContainer">
                <img src={Logo} alt="" />
            </div>
            <div className="admi mt-16">
                <SidebarModule font="fa-solid fa-gauge-simple-high" link="Dashboard"></SidebarModule>
                <SidebarModule font="fa-solid fa-briefcase" link="Jobs"></SidebarModule>
                <SidebarModule font="fa-solid fa-newspaper" link="What's New"></SidebarModule>
                <SidebarModule font="fa-solid fa-people-group" link="Team"></SidebarModule>
            </div>
        </div>
    );
};
