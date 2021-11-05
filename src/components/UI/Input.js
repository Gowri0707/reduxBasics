import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={classes["input-form"]}>
            <label htmlFor={props.label}>{props.label}</label>
            <input
            type={props.type}
            name={props.label}
            value={props.value} />
        </div>
    )
}

export default Input;