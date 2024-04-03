import RegistrationForm from "../../components/auth/RegistrationForm/RegistrationForm";
import css from "./Registration.module.css";

export default function Registration() {

    return (
        <div className={css.box}>
            <h1>Register</h1>
            <RegistrationForm />
        </div>
    );
}
