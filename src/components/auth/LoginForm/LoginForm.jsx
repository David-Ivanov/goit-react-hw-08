import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import Button from "../../custom/Button/Button";
import toast from "react-hot-toast";
import { fetchContacts } from "../../../redux/contacts/operations";

const emailValidation = Yup.string().email(2).min(3, "Too short!").max(50, "Too long!").required("Required")
const passwordValidation = Yup.string().min(7, "Too short!").max(50, "Too long!").required("Required");
const loggedInSchema = Yup.object().shape({
    email: emailValidation,
    password: passwordValidation
});

export default function RegisterForm() {

    const initialValues = {
        email: "",
        password: "",
    }



    const dispatch = useDispatch();

    const submitCredentials = async (event, { resetForm }) => {
        try {
            await dispatch(
                login({
                    email: event.email,
                    password: event.password,
                })).unwrap()
            toast.success("Welcome back!");
            dispatch(fetchContacts());
        } catch (e) {
            toast.error("Something went wrong! Please, try again");
        } finally {
            resetForm()
        }

    };

    return (
        <Formik initialValues={initialValues} onSubmit={submitCredentials} validationSchema={loggedInSchema}>
            <Form className={css.form}>

                <label className={css.label}>
                    Email
                    <Field className={css.input} type="email" name="email" />
                    <p className={css.error}><ErrorMessage name="email" as="span" /></p>
                </label>
                <label className={css.label}>
                    Password
                    <Field className={css.input} type="text" name="password" />
                    <p className={css.error}><ErrorMessage name="password" as="span" /></p>
                </label>


                <Button className={css.btn} type="submit">Register</Button>

            </Form>
        </Formik>
    )
}