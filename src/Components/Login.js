import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data
    const nameValue = isSignInForm ? null : name.current?.value;
    const message = checkValidData(
      email.current.value,
      password.current.value,
      nameValue,
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/90 via-black/20 to-black/95">
        <Header />
        <img
          className="h-full w-full object-cover scale-110 opacity-50 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ae999ff9-5858-4638-b0f2-8abcf9fb6a08/web/IN-en-20260831-TRIFECTA-perspective_8fd44dcf-63ea-4547-8e1e-e5fc7e03883d_small.jpg"
          alt="background-image"
        />
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />

          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold text-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 text-gray-400 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? (
              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                New to CineMind?{" "}
                <span className="font-bold text-white hover:underline">
                  Sign up now.
                </span>
              </p>
            ) : (
              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                Already registered?{" "}
                <span className="font-bold text-white hover:underline">
                  Sign In now.
                </span>
              </p>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
