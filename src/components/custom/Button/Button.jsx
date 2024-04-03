import css from "./Button.module.css"

export default function Button({ type = "button", handleClick, children, className },) {
    return (<button onClick={handleClick} className={`${css.btn} ${className}`} type={type}>{children}</button>)
}
