import css from "./Home.module.css";

export default function Home() {
    return (
        <div className={css.box}>
            <h1>Home page</h1>
            <p className={css.subtitle}>Phonebook website</p>
            <p><span className={css.span}>Technology used</span>: HTML, JS, React</p>
            <p><span className={css.span}>Libraries used</span>: Redux, Redux Persist, React router DOM, Axios, Formik, Yup, Fuse, React icons, React loader spinner, React hot toast, clsx</p>
            <p className={css.text}>Made by David Ivanov</p>
        </div >
    )
}
