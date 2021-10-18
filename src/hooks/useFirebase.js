import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";
initAuth();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const logInUsingGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signUpWithEmailAndPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(1);
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        window.location.reload();
        // setRender(true);
        console.log(result.user);
        console.log(2);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  const emailAndPasswordSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // ...
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("fgfdg");
        localStorage.removeItem("Authenticated");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    logInUsingGoogle,
    signUpWithEmailAndPassword,

    emailAndPasswordSignIn,
    logOut,
    user,
    setUser,
    isLoading,
  };
};
export default useFirebase;
