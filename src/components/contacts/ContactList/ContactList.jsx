import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../../redux/contacts/operations";
import { selectFilteredContacts, selectLoading } from "../../../redux/contacts/selectors";
import Contact from "../Contact/Contact"
import Loader from "../../custom/Loader/Loader";

export default function ContactList() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectLoading);

    return (
        <>
            <ul className={css.list}>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id ?? contact.item.id}
                        id={contact.id ?? contact.item.id}
                        name={contact.name ?? contact.item.name}
                        number={contact.number ?? contact.item.number}
                    />
                ))}
            </ul>

            {loading && <Loader className={css.loader} />}
        </>
    )
}