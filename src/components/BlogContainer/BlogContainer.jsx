import React from "react";
import { Link } from "react-router-dom";

export const BlogContainer = ({ body, title, deleteBlog, editBlog }) => {
    return (
        <div className="blogContainer my-4 cursor-pointer">
            <div className="blogContainer__item flex justify-between items-center p-4 bg-[#fff] text-[#000] ">
                <div className="content__blogContainer">
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
                <div className="firstAdminBlogContainer__item">
                    <button onClick={() => editBlog()} className="px-4 py-2 mr-4 text-[#fff] rounded bg-[#4285F4]">
                        <Link to="/admin">Edit</Link>
                    </button>
                    <button onClick={() => deleteBlog()} className="px-4 py-2 mr-4 text-[#fff] rounded bg-[#DB4437]">
                        <Link to="/admin">Delete</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
