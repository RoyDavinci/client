import React, { useState } from "react";
import "./jobEditContainer.css";

export const JobEditContainer = () => {
    const [details, setDetails] = useState({ type: "", title: "", benefits: "", description: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };

    return (
        <div className="admin__JobEditContainer">
            <form action="">
                <div className="adminJobInput">
                    <label htmlFor="type">Type</label>
                    <input type="text" name="" id="type" value={details.type} onChange={handleChange} />
                </div>
                <div className="adminJobInput">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="" id="title" value={details.title} onChange={handleChange} />
                </div>
                <div className="adminJobInput">
                    <label htmlFor=""></label>
                    <textarea name="" id="" cols={12} rows={10} value={details.benefits} onChange={handleChange}></textarea>
                </div>
                <div className="adminJobInput">
                    <label htmlFor=""></label>
                    <textarea name="" id="" cols={12} rows={10} value={details.description} onChange={handleChange}></textarea>
                </div>
                <div className="admin__jobContainerButton mx-auto my-0">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};
