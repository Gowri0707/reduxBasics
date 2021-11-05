import classes from "./Auth.module.css";
import Input from "../UI/Input";
import { authenticateActions } from "../../store/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
    const dispatch = useDispatch();
  const loginButtonHandler = (event) => {
    event.preventDefault();
    dispatch(authenticateActions.login());
    
  };

  return (
    <form className={classes["auth-form"]}  onClick={loginButtonHandler}>
      <Input label={"EMAIL"} type={"text"} />
      <Input label={"PASSWORD"} type={"text"} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Auth;
