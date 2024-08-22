import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { auth } from "../../../Redux/AuthActionCreaters";

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password, mode) => dispatch(auth(email, password, mode))
  };
};

class Authentication extends Component {
  state = {
    switching: 'log in'
  };

  handleSwitch = () => {
    this.setState(prevState => ({
      switching: prevState.switching === "log in" ? "sign up" : "log in"
    }));
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirm: ""
          }}
          onSubmit={(values) => {
            this.props.auth(values.email, values.password, this.state.switching);
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 4) {
              errors.password = "Must be at least 4 characters";
            }
            if (this.state.switching === "sign up" && values.password !== values.passwordConfirm) {
              if (!values.passwordConfirm) {
                errors.passwordConfirm = "Required";
              } else if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = "Passwords do not match";
              }
            }
            return errors;
          }}
        >
          {({ values, handleSubmit, handleChange, errors }) => (
            <form onSubmit={handleSubmit} className="tw-flex tw-flex-col">
              <h4 className="tw-text-center">Toph</h4>
              <div className="tw-mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  className="tw-border tw-p-2 tw-rounded tw-w-full"
                />
                {errors.email && <span className="tw-text-red-500">{errors.email}</span>}
              </div>
              <div className="tw-mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  className="tw-border tw-p-2 tw-rounded tw-w-full"
                />
                {errors.password && <span className="tw-text-red-500">{errors.password}</span>}
              </div>
              {this.state.switching === "sign up" && (
                <div className="tw-mb-4">
                  <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    className="tw-border tw-p-2 tw-rounded tw-w-full"
                  />
                  {errors.passwordConfirm && <span className="tw-text-red-500">{errors.passwordConfirm}</span>}
                </div>
              )}
              <button type="submit" className="tw-bg-blue-500 tw-text-white tw-p-2 tw-rounded">
                {this.state.switching === "log in" ? "Log in" : "Sign up"}
              </button>
            </form>
          )}
        </Formik>
        <button onClick={this.handleSwitch} className="tw-bg-cyan-500 tw-mt-4 tw-p-2 tw-rounded">
          {this.state.switching === "log in" ? "Create an account" : "Already have an account"}
        </button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Authentication);
