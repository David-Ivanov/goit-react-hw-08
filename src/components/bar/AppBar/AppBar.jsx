import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import AuthBar from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import css from "./AppBar.module.css";

export default function AppBar() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={css.box}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </div>
    )
}
