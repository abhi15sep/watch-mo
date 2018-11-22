import React from "react";
import Link from "react-router-dom/Link";
import HeaderNavigation from "./HeaderNavigation";
import times from "lodash/times";

const Header = () => (
    <header className="w-100">
        <div className="container-fluid navbar p-0 justify-content-start align-items-center">
            <div className="logo">
                <Link to="/" className="bold text-lowercase px-3" title="WatchMo.com">
                    WatchMo
                </Link>
            </div>
            <HeaderNavigation />
            <div className="hamburger d-sm-none d-md-none">
                {times(3,(index) => <span key={index} /> )}
            </div>
        </div>
    </header>
);

export default Header;
