import { useDispatch } from "react-redux"
import { deleteContact } from "../../../redux/contacts/operations";
import toast from "react-hot-toast";
import css from "./ModalConfirmation.module.css"
import Button from "../../custom/Button/Button";

export default function ModalConfirmation({ id, toggle }) {

    const dispatch = useDispatch();
    const accent = async (id) => {
        try {
            await dispatch(deleteContact(id)).unwrap();
            toast.success("Contact deleted success");
        } catch (e) {
            toast.error('Something went wrong');
        } finally {
            toggle();
        }
    }

    return (
        <div className={css.backdrop}>
            <div className={css.box}>
                <p className={css.text}>Delete contact?</p>

                <div className={css.btnBox}>
                    <Button type="button" handleClick={() => accent(id)}>Accept</Button>
                    <Button type="button" handleClick={toggle}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}
