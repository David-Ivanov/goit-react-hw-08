import LoginForm from "../../components/auth/LoginForm/LoginForm";
import css from "./Login.module.css";

export default function Login() {
    return (
        <div className={css.box}>

            <h1>Login</h1>
            <LoginForm />
        </div>
    );
}
