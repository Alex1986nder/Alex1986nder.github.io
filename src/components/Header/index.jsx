import React, { Component } from "react";
import "./styles.css";
import logo_img from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { logOut } from "../../action";
import { connect } from "react-redux";

import { PropTypes } from "prop-types";

export class Header extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <>
        <header className="Header">
          <div className="Header__logo">
            <img alt="" src={logo_img} />
          </div>
          <nav>
            <ul className="Header__navList">
              <li className="Header__navItem">
                <div onClick={this.unauthenticate}>
                  <Link to="/">Выйти</Link>
                </div>
              </li>
              <li className="Header__navItem">
                <Link to="/map">Карта</Link>
              </li>
              <li className="Header__navItem">
                <Link to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export const HeaderConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  {
    logOut,
  }
)(Header);
