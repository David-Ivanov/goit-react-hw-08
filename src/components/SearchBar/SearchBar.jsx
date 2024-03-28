import { useId } from "react"
import css from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBar() {

    const inputId = useId();
    const dispatch = useDispatch();

    const handleChange = event => {
        const value = event.target.value;
        dispatch(changeFilter(value));
    }

    return (
        <div className={css.box}>

            <label htmlFor={inputId} className={css.label}>Find contacts by name</label>
            <input id={inputId} className={css.input} type="text" name="search" onChange={handleChange} />

        </div>
    )
}