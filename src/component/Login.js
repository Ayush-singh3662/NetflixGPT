import { useRef, useState } from "react";
import Header from "./Header";
import { validData, validData2 } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState("");
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickButton = () => {
    let message = "";
    if (!isSignIn) {
      message = validData(
        name.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      message = validData2(email.current.value, password.current.value);
    }
    setError(message);

    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-1/345844970_1645385249218727_6510530699562498707_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ZexzAnc0LlsAX9mMXe3&_nc_ht=scontent.fccu23-1.fna&oh=00_AfBk0boBV-D2Mvfshp0TXu9iZEorK_cjto_Qy58fv8nsRw&oe=65DCB504",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="bg-cover bg-center absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="bg-gray-700 p-3 my-4 w-full rounded-sm"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="bg-gray-700 p-3 my-4 w-full rounded-sm"
          type="text"
          placeholder="Email or Phone number"
        />
        <input
          ref={password}
          className="bg-gray-700 p-3 my-4 w-full rounded-sm"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{error}</p>
        <button
          onClick={handleClickButton}
          className="p-4 my-6 bg-red-700 w-full rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;