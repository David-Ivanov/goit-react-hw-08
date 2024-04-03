import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { changeContact } from "../../../redux/contacts/operations";
import css from "./ChangeModal.module.css";
import Button from "../../custom/Button/Button";

export default function ChangeModal({ id, toggle, value }) {



    const validation = Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required");
    const addContactSchema = Yup.object().shape({
        username: validation,
        number: validation
    });

    const initialValues = {
        username: value.name,
        number: value.number,
    }

    const dispatch = useDispatch()
    const handleSubmit = async event => {
        const name = event.username;
        const number = event.number
        const contact = { id, name, number };
        try {
            await dispatch(changeContact(contact)).unwrap();
            toast.success("Changed successful!");
        } catch (e) {
            toast.error("Something went wrong, please try again!");
        } finally {
            toggle();
        }
    }

    return (<div className={css.backdrop}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={addContactSchema}>
            <Form className={css.form}>

                <label className={css.label}>
                    Name
                    <Field className={css.input} type="text" name="username" />
                    <p className={css.error}><ErrorMessage name="username" /></p>
                </label>
                <label className={css.label}>
                    Number
                    <Field className={css.input} type="text" name="number" />
                    <p className={css.error}><ErrorMessage name="number" /></p>
                </label>

                <div className={css.btnBox}>
                    <Button className={css.btn} type="button" handleClick={toggle}>Cancel</Button>
                    <Button className={css.btn} type="submit">Change</Button>
                </div>
            </Form>
        </Formik>
    </div>)
}
