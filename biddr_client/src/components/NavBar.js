import React from "react";
import { NavLink /* Link */ } from "react-router-dom";

function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <div className="ui pointing menu">
      <NavLink to="/auctions" className="item">
        Auctions
      </NavLink>
      {currentUser ? (
        <>
          <span className="item" style={{ color: "green" }}>
            Welcome {currentUser.full_name}
          </span>
          <NavLink exact to="/auctions/new" className="item">
            Post an auction
          </NavLink>
          <NavLink to="/auctions" onClick={onSignOut} className="item">
            Sign Out
          </NavLink>
        </>
      ) : (
        <React.Fragment>
          <NavLink exact to="/sign_in" className="item">
            Sign In
          </NavLink>
          <NavLink exact to="/sign_up" className="item">
            Sign Up
          </NavLink>
        </React.Fragment>
      )}

    </div>
  );
}

export default NavBar;
