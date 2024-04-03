import { useSelector } from "react-redux";
import { selectUsername } from "../../../redux/auth/selectors";
import LogoutBtn from '../../auth/LogoutBtn/LogoutBtn';
import css from "./UserMenu.module.css";

export default function UserMenu() {

    const username = useSelector(selectUsername);

    const width = window.innerWidth;

    return (
        <div className={css.box}>
            {width > 760 &&
                <p className={css.text}>Welcome, {username}</p>
            }
            <LogoutBtn />
        </div>
    )
}