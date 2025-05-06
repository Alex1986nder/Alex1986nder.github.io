import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import logo_img from "../../../assets/images/logo_1.svg";
import map_img from "../../../assets/images/map.png";
import { regs } from "../../../action";
import { Button } from "../../../ui";
import { Redirect } from "react-router-dom";

export class Registration extends Component {
  regs = (e) => {
    e.preventDefault();
    const { email, password, name, surname } = e.target;
    this.props.regs(email.value, password.value, name.value, surname.value);
  };
  
  render() {
    return (
      <>
        {this.props.isRegisterIn ? (
          <Redirect to="/map" />
        ) : (
          <>
            <div className="Unauthorized">
              <div className="Unauthorized__block" data-name="logo">
                <img alt="" src={logo_img} />
              </div>
              <div className="Unauthorized__block" data-name="form">
                <img alt="" src={map_img} />
                <div className="AuthForm__container">
                  <form onSubmit={this.regs}>
                    <h2>Регистрация</h2>
                    <label htmlFor="email">Email*</label>
                    <input required id="email" type="email" name="email" />
                    <label htmlFor="name">Как вас зовут?*</label>
                    <input required type="text" name="name" id="name" />
                    <label htmlFor="surname"></label>
                    <input required type="text" name="surname" id="surname" />
                    <label htmlFor="password">Придумайте пароль*:</label>
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                    />
                    <Button className="registr" type="submit">
                      Зарегистрироваться
                    </Button>
                    <div className="reg">
                      Уже зарегистрированы?
                      <div type="submit">
                        <Link to="/">Войти</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
        ;
      </>
    );
  }
}

Registration.propTypes = {
  isRegisterIn: PropTypes.bool,
};

export const RegistrationConnect = connect(
  (state) => ({ isRegisterIn: state.reg.isRegisterIn }),
  { regs }
)(Registration);
