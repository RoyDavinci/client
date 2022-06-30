import React from "react";
import { Link } from "react-router-dom";
import "./adminJobContainer.css";

export const AdminJobContainer = ({ type, title, deleteJob, editJob }) => {
    return (
        <div className="adminJobContiner my-4 cursor-pointer">
            <div className="adminJobContainer__items flex justify-between p-4 bg-[#fff] text-[#000]">
                <div className="firstAdminJobContainer__item flex">
                    <p className="mr-8">{type}</p>
                    <p className="">{title}</p>
                </div>
                <div className="firstAdminJobContainer__item">
                    <button onClick={() => editJob()} className="px-4 py-2 mr-4 text-[#fff] rounded bg-[#4285F4]">
                        Edit
                    </button>
                    <button onClick={() => deleteJob()} className="px-4 py-2 mr-4 text-[#fff] rounded bg-[#DB4437]">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
