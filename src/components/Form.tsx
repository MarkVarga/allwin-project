import React from "react";
import { Link, useLocation } from "react-router-dom";

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
  handleSubmit,
}: any) => {
  const location = useLocation();

  const passwordOnChangeHandler = (e: any) => {
    setPassword(e.target.value);
    setTimeout(() => {
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
    }, 1000);
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
            onChange={passwordOnChangeHandler}
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
        <div className="button-container">
          {location.pathname === "/" && (
            <button disabled={emailError || passwordError} type="submit">
              &#128008; Login &#128008;
            </button>
          )}
          {location.pathname === "/signup" && (
            <button disabled={emailError || passwordError} type="submit">
              &#128008; Sign up &#128008;
            </button>
          )}
        </div>
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
