import "./login-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFields = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        alert("Wrong Password");
      }
      if (error.code === "auth/user-not-found") {
        alert("User Not Found");
      }
    }
  };

  const signInWithGoogle = async () => {
    console.log("trigg");
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="login-form">
      <h2> I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit"> Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
