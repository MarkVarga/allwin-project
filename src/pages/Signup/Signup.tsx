import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { useAuthContext } from "../../contexts/auth";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generalError, setGeneralError] = useState(false);
  const [generalErrorMessage, setGeneralErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const { signUp }: any = useAuthContext();

  const emailValidationPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const passwordValidationPattern = /(?=.*\d)(?=.*[a-z]).{6,}/;

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err: any) {
      setGeneralError(true);
      setGeneralErrorMessage(err.message);
    }
  };

  return (
    <div className="login">
      <img src="https://c.tenor.com/jRcpod5gY0sAAAAM/cat-typing.gif" />
      <div className="title-div">
        <h1>
          Sign up to see awesome &#128049;&#128049;&#128049;!<span>|</span>
        </h1>
      </div>
      <Form
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        setEmailError={setEmailError}
        emailErrorMessage={emailErrorMessage}
        setEmailErrorMessage={setEmailErrorMessage}
        emailValidationPattern={emailValidationPattern}
        password={password}
        setPassword={setPassword}
        passwordError={passwordError}
        setPasswordError={setPasswordError}
        passwordErrorMessage={passwordErrorMessage}
        setPasswordErrorMessage={setPasswordErrorMessage}
        passwordValidationPattern={passwordValidationPattern}
        generalError={generalError}
        generalErrorMessage={generalErrorMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Signup;
