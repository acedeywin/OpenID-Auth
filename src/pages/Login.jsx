import { useDispatch } from "react-redux";
import { auth, redirectUri } from "../auth/auth";
import { getProfile } from "../store/actions/action.creators";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      await auth.loginWithRedirect({
        redirect_uri: redirectUri,
      });

      const user = await auth.getUser();

      dispatch(getProfile(user));
    } catch (error) {
      console.log(error);
    }
  };

  // JSX code for login form
  const renderForm = (
    <div>
      <button
        className="button"
        // disabled={!validateForm()}
        onClick={handleLogin}
      >
        Sign In
      </button>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
};

export default Login;
