import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";
import { useState } from "react";
import ChangeModal from "../ChangeModal/ChangeModal";
import Button from "../../custom/Button/Button";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function Contact({ name, number, id }) {

    const [showDeletedModal, setShowDeletedModal] = useState(false);
    const [changeModal, setChangeModal] = useState(false);

    const toggleDeletedModal = () => {
        setShowDeletedModal(!showDeletedModal)
    }
    const toggleChangeModal = () => {
        setChangeModal(!changeModal);
    }


    return (
        <>
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

                <div className={css.itemBox}>
                    <button className={css.btn} type="button" onClick={toggleChangeModal}><FaPen size="20px" /></button>
                    <button className={css.btn} type="button" onClick={toggleDeletedModal}><MdDelete size="22px" /></button>
                </div>
            </li>

            {showDeletedModal && <ModalConfirmation id={id} toggle={toggleDeletedModal} />}
            {changeModal && <ChangeModal id={id} toggle={toggleChangeModal} value={{ name, number }} />}
        </>
    )
}