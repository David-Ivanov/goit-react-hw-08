import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {

    const isLoggedIn = useSelector(selectIsLoggedIn);


    const buildLinkClass = ({ isActive }) => {
        return clsx(isActive && css.active);
    }

    return (
        <nav className={css.box}>
            <NavLink className={buildLinkClass} to="/">Home</NavLink>
            {isLoggedIn && <NavLink className={buildLinkClass} to="/contacts">Contacts</NavLink>}
        </nav>
    )
}