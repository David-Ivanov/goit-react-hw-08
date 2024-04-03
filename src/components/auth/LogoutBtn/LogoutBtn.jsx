import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/operations";
import Button from "../../custom/Button/Button";

export default function LogoutBtn() {

    const dispatch = useDispatch();

    return (<Button type="button" handleClick={() => dispatch(logout())}>Logout</Button>);
}
