import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSubmit = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSubmit}
      type="button"
      className="bg-red-500 text-white p-3 rounded-lg uppercase text-lg drop-shadow-lg shadow-md hover:opacity-95"
    >
      continue with google
    </button>
  );
};

export default OAuth;
