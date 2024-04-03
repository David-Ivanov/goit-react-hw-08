import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/contacts/operations";
import Button from "../../custom/Button/Button";

const validation = Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required");
const addContactSchema = Yup.object().shape({
    username: validation,
    number: validation
});

export default function ContactForm() {

    const initialValues = {
        username: "",
        number: "",
    }

    const dispatch = useDispatch();
    const handleSubmit = (values, event) => {
        dispatch(addContact({
            name: values.username,
            number: values.number,
        }));

        event.resetForm();
    }





    return (
        <Formik validationSchema={addContactSchema} initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>

                <div className={css.box}>
                    <label>
                        Name
                        <Field className={css.input} type="text" name="username" />
                        <p className={css.error}><ErrorMessage name="username" as="span" /></p>
                    </label>
                </div>
                <div className={css.box}>
                    <label>
                        Number
                        <Field className={css.input} type="text" name="number" />
                        <p className={css.error}><ErrorMessage name="number" as="span" /></p>
                    </label>
                </div>
                <Button className={css.btn} type="submit">Add contact</Button>

            </Form>
        </Formik>);
}