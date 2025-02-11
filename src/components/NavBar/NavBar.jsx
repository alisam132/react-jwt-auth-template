// src/components/NavBar/NavBar.jsx

import { Link } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";



const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <nav>
      {user ? (
        <ul>
          <li>Welcome, {user.username}</li>
          <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/">Home</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
