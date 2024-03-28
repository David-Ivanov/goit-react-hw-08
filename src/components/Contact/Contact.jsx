import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ name, number, id }) {

    const dispatch = useDispatch();
    const handleClick = id => {
        dispatch(deleteContact(id));
    }


    return (
        <li className={css.item}>
            <div>

                <div className={css.line}>
                    <BsPersonFill className={css.icon} />
                    <p>{name}</p>
                </div>

                <div className={css.line}>
                    <FaPhoneAlt className={css.icon} />
                    <p>{number}</p>
                </div>

            </div>

            <button type="button" onClick={() => handleClick(id)}>Delete</button>
        </li>
    )
}