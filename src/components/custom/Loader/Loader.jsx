import { Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ className }) {
    return (<div className={`${css.loader} ${className}`} ><Blocks /></div >)
}
