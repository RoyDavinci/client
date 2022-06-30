import React from "react";
import { Link } from "react-router-dom";

export const SidebarModule = ({ link, font }) => {
    return (
        <div className="mb-4">
            <i className={`${font} mr-4 `}></i>
            <Link to={`/${link === "Dashboard" ? "admin" : link === "What's New" ? "admin/whats-new" : `admin/${link.toLocaleLowerCase()}`}`}>{link}</Link>
        </div>
    );
};
