// redux tools for calling actions and getting data from store
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/navbar.module.css";
// import form react router
import { Outlet, NavLink } from "react-router-dom";
// actions from Auth Reducer
import {
  authSelector,
  removeSessionThunk,
} from "../../Redux/Reducers/authReducer";

// Navbar Component
export default function Navbar() {
  // for calling actions
  const dispatch = useDispatch();

  // user's login status from redux store
  const { isLoggedIn } = useSelector(authSelector);

  return (
    <>
      {/* main container */}
      <div className={styles.navbarContainer}>
        {/* app heading */}
        <div className={styles.appName}>
          <NavLink to="/">
            {/* logo of the app */}
            <i class="fa-solid fa-store"></i>
            Buy Busy2
          </NavLink>
        </div>

        {/* all the navigation link */}
        <div className={styles.navLinks}>
          {/* homepage link */}
          <NavLink to="/">
            <span>Home</span>
          </NavLink>

          {/* myorder link */}
          {/* show when user is logged in */}
          {isLoggedIn && (
            <NavLink to="/myorder">
              <span>Orders</span>
            </NavLink>
          )}
          {/* show when user is logged in */}
          {isLoggedIn && (
            <NavLink to="/cart">
              <span>
                {/* cart icon */}
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
              </span>
            </NavLink>
          )}

          {/* for signIN and signOut */}
          <NavLink to={!isLoggedIn ? "/signin" : "/"}>
            <span>
              {!isLoggedIn ? (
                <>
                  {/* sign in user */}
                  SignIn
                </>
              ) : (
                <>
                  {/* sign out user  */}
                  <span onClick={() => dispatch(removeSessionThunk())}>
                    Logout
                  </span>
                </>
              )}
            </span>
          </NavLink>
        </div>
      </div>
      {/* render child pages */}
      <Outlet />
    </>
  );
}
