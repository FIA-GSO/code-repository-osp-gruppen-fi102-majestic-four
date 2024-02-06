import React from "react";

interface INavbar {
    className?: string;
}

const Navbar: React.FC<INavbar> = ({ className }) => {
    return <div className={`${className || ""}`}>Navbar</div>;
};

export default Navbar;
