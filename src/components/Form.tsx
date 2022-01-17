import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "debounce";
import "./Form.css";

const Form = ({
  email,
  setEmail,
  emailError,
  setEmailError,
  emailErrorMessage,
  setEmailErrorMessage,
  emailValidationPattern,
  password,
  setPassword,
  passwordError,
  setPasswordError,
  passwordErrorMessage,
  setPasswordErrorMessage,
  passwordValidationPattern,
  generalError,
  setGeneralError,
  generalErrorMessage,
  setGeneralErrorMessage,
  handleGoogleLogin,
  handleSubmit,
}: any) => {
  const location = useLocation();

  const passwordOnChangeHandler = (e: any) => {
    debounce(setPassword(e.target.value), 1000);
    if (password === "") {
      setPasswordError(true);
      setPasswordErrorMessage("this field cannot be empty");
    } else if (password.match(passwordValidationPattern) == null) {
      setPasswordError(true);
      setPasswordErrorMessage("this password is not valid");
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onBlur={() => {
              if (email === "") {
                setEmailError(true);
                setEmailErrorMessage("this field cannot be empty");
              } else if (email.match(emailValidationPattern) == null) {
                setEmailError(true);
                setEmailErrorMessage("this email is not valid");
              } else {
                setEmailError(false);
                setEmailErrorMessage("");
              }
            }}
            required
          />
          {emailError && <p className="error-message">{emailErrorMessage}</p>}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={debounce((e: any) => {
              setPassword(e.target.value);
              console.log(e.target.value);
              if (e.target.value === "") {
                setPasswordError(true);
                setPasswordErrorMessage("this field cannot be empty");
              } else if (
                e.target.value.match(passwordValidationPattern) == null
              ) {
                setPasswordError(true);
                setPasswordErrorMessage("this password is not valid");
              } else {
                setPasswordError(false);
                setPasswordErrorMessage("");
              }
            }, 1000)}
            onBlur={() => {
              if (password === "") {
                setPasswordError(true);
                setPasswordErrorMessage("this field cannot be empty");
              } else if (password.match(passwordValidationPattern) == null) {
                setPasswordError(true);
                setPasswordErrorMessage("this password is not valid");
              } else {
                setPasswordError(false);
                setPasswordErrorMessage("");
              }
            }}
            required
          />
          {passwordError && (
            <p className="error-message">{passwordErrorMessage}</p>
          )}
        </div>
        {location.pathname === "/" && (
          <div className="button-container">
            <button disabled={emailError || passwordError} type="submit">
              &#128008; Login &#128008;
            </button>

            <button onClick={handleGoogleLogin} type="submit">
              &#128008; Login with Google &#128008;
            </button>
          </div>
        )}

        {location.pathname === "/signup" && (
          <div className="button-container">
            <button disabled={emailError || passwordError} type="submit">
              &#128008; Sign up &#128008;
            </button>
          </div>
        )}
        {location.pathname === "/" && (
          <p>
            Not a user? <Link to="/signup">Sign up</Link>
          </p>
        )}
        {location.pathname === "/signup" && (
          <p>
            Already a user? <Link to="/">Log in</Link>
          </p>
        )}
        <p>
          Need <Link to="/help">help</Link>?
        </p>
        {generalError && <p className="error-message">{generalErrorMessage}</p>}
      </form>
    </div>
  );
};

export default Form;
