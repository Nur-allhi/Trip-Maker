import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import GithubIcon from "../../img/icon/githubIcon";
import GrommetIconsGoogle from "../../img/icon/googleIcon.jsx";
import "./Login.css";
import {
  createUserWithEmailAndPassword, handleGithubSignIn,
  // handleFbSignIn,
  handleGoogleSignin,
  initializeAppLoginFrameWork,
  signInWithEmailAndPassword
} from "./LoginManager";


function Login() {
  initializeAppLoginFrameWork();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  // Taking Data from the input feild:
  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passWordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passWordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  // Handle response:
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  // Handle Google sign in:
  const googleSignIn = () => {
    handleGoogleSignin().then((res) => {
      handleResponse(res, true);
    });
  };
  // Github sign in:
  const githubsignIn = () => {
    handleGithubSignIn().then((res) => {
      handleResponse(res, true);
    });
  };
  // Handle facebook sign n:
  // const fbSignIn = () => {
  //   handleFbSignIn().then((res) => {
  //     handleResponse(res, true);
  //   });
  // };

  // New user / old user :
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      // Create user:
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      // Old user:
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className="sign-in-up-form">
        <form onClick={handleSubmit}>
          <h4>{newUser ? "Create an account" : "Login"} </h4>
          {newUser && (
            <input
              type="text"
              onBlur={handleBlur}
              name="name"
              placeholder="Your name"
            />
          )}
          <br />
          <input
            type="text"
            name="email"
            onBlur={handleBlur}
            placeholder="Your Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Your Password"
            required
          />
          <br />
          {/* {newUser && (
            <input
              type="password"
              onBlur={handleBlur}
              name="name"
              placeholder="Confrim password"
            />
          )} */}
          <br />
          <input
            className="signInUpbtn"
            type="submit"
            value={newUser ? "Sign Up" : "Sign In"}
          />
          <p onClick={() => setNewUser(!newUser)}>
            {" "}
            {newUser
              ? "Already have account? Login "
              : "Dont have account? Sign In"}
          </p>
        </form>
      </div>

      <br />
      <div className="otherAuthBtn">
        <button onClick={googleSignIn}>
          {GrommetIconsGoogle()} <ion-icon name="person"></ion-icon> Google
        </button>
        {/* <button onClick={fbSignIn}>{FaceBookicon()}Facebook</button> */}
        <button onClick={githubsignIn}>{GithubIcon()} Github</button>
      </div>
    </div>
  );
}

export default Login;
