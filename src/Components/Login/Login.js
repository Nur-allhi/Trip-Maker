import "./Login.css";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import {
  createUserWithEmailAndPassword,
  handleFbSignIn,
  handleGoogleSignin,
  handleSignOut,
  initializeAppLoginFrameWork,
  signInWithEmailAndPassword,
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

  console.log(user.isSignedIn);

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

  // Handle facebook sign n:
  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

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

  // Handle sign out:
  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      {user.isSignedIn ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={googleSignIn}>Sign in</button>
      )}
      <br />
      <button onClick={fbSignIn}>Sign in using FB</button>
      {user.isSignedIn && (
        <div>
          <p>Welcome {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
      <h1>Our Own Authentication</h1>
      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
        id=""
      />
      <label htmlFor="newUser">New user sign up</label>
      <form onClick={handleSubmit}>
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
        <input type="submit" value={newUser ? "Sign Up" : "Sign in"} />
      </form>
      <p style={{ color: "red" }}>{user.error}</p>
      {user.success && (
        <p style={{ color: "green" }}>
          Successfully {newUser ? "created" : "Loged In"} the user
        </p>
      )}
    </div>
  );
}

export default Login;
