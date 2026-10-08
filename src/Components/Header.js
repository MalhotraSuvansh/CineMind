import React, { useEffect } from "react";
import logo from "../Utils/cinemind-logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-20 flex justify-between">
      <img
        className="w-44 md:w-52 object-contain mix-blend-screen drop-shadow-[0_2px_12px_rgba(229,9,20,0.6)] cursor-pointer"
        src={logo}
        alt="Logo"
      />
      {user && (
        <div className="flex items-center gap-4 pr-4">
          <img
            alt="usericon"
            src={user?.photoURL}
            className="w-14 h-14 rounded-md shadow-md cursor-pointer hover:opacity-80 transition-opacity"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 w-30 text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-red-700 transition-colors duration-200 shadow-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
