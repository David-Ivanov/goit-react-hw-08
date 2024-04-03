import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function UserMenu() {

    const buildLinkClass = ({ isActive }) => {
        return clsx(isActive && css.active);
    }

    return (
        <div className={css.box}>
            <NavLink className={buildLinkClass} to="/register">Register</NavLink>
            <NavLink className={buildLinkClass} to="/login">Login</NavLink>
        </div>
    )
}