import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.config";

export const initializeAppLoginFrameWork = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

// Google sign in:
export const handleGoogleSignin = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = {
        isSignedIn: true,
        success: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return signedInUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// Github sign in:
export const handleGithubSignIn = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var user = result.user;

      return user;
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};
// Facebook sign in:
// export const handleFbSignIn = () => {
//   const fbProvider = new firebase.auth.FacebookAuthProvider();
//   return firebase
//     .auth()
//     .signInWithPopup(fbProvider)
//     .then((result) => {
//       console.log(result);
//       /** @type {firebase.auth.OAuthCredential} */
//       // var credential = result.credential;
//       var user = result.user;
//       user.success = true;
//       return user;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user.displayName);
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      console.log(newUserInfo);
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
// Update user name:
const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      // Update successful.
      console.log("user Name updated successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Sign out:
export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signOutUser = {
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
        error: "",
        success: false,
      };
      return signOutUser;
    });
};
