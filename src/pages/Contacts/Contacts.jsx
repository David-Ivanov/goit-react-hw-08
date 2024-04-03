import { useSelector } from "react-redux";
import ContactForm from "../../components/contacts/ContactForm/ContactForm";
import ContactList from "../../components/contacts/ContactList/ContactList";
import SearchBar from "../../components/contacts/SearchBar/SearchBar";
import { selectError } from "../../redux/contacts/selectors";
import css from "./Contacts.module.css";
import toast from "react-hot-toast";

export default function Contacts() {

    const error = useSelector(selectError);

    return (
        <div className={css.box}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBar />

            {error && toast.error("Something went wrong! Please, try again")}
            {!error && <ContactList />}
        </div>
    )
}
