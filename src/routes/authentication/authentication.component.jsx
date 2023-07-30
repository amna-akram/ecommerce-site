import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import LoginForm from "../../components/login-form/login-form.component";

import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div>
      <div class="forms-parent">
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
