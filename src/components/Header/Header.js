import { useSelector, useDispatch } from "react-redux";
import { authenticateActions } from "../../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const logoutButtonHandler = () => {
    dispatch(authenticateActions.logout());
  };

  return (
    <header className={classes["auth-header"]}>
      <h1>Redux Auth</h1>
      <nav className={classes["header-nav"]}>
        {isLoggedIn && (
          <>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </ul>
            <button type="button" onClick={logoutButtonHandler}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
