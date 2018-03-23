import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, VideoIcon } from "../../constants";

const HeadWithTitle = () => (
    <ul className="nav">
        <li className="inline-fix ml-3">
            <Link to="/" className="bold px-3" title="Go to previous Page">
                {ArrowLeft}
            </Link>
            <span
                className="bold d-inline-block text-truncate align-middle with-movie-title"
                title="Movie Title Comes Here"
            >
                {VideoIcon}
                <span className="pl-2">Movie Title Comes Here</span>
            </span>
        </li>
    </ul>
);

export default HeadWithTitle;