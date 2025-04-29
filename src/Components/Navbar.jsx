import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Navbar.module.scss";
import Logo from "../assets/Favicon.png";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#28293e]">
        <header className="flex justify-between items-center mx-auto container py-4 px-25">
          <div className="flex items-center gap-2">
            <img className="w-[48px] h-[48px]" src={Logo} alt="Logo" />
            <h4 className={styles.Logo}>Agency</h4>
          </div>
          <nav className="flex gap-24">
            <NavLink to={"/about"}>
              <p className={styles.NavItem}>About</p>
            </NavLink>
            <NavLink to={"/services"}>
              <p className={styles.NavItem}>Services</p>
            </NavLink>
            <NavLink to={"/pricing"}>
              <p className={styles.NavItem}>Pricing</p>
            </NavLink>
            <NavLink to={"/blog"}>
              <p className={styles.NavItem}>Blog</p>
            </NavLink>
          </nav>
          <button
            className={`border border-[#FFFFFFA3] px-6 py-2 rounded-md transition`}
          >
            <p className="text-[14px] text-white">CONTACT</p>
          </button>
        </header>
      </div>
    </>
  );
};
export default Navbar;
