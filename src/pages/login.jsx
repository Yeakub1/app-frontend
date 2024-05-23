import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import banner from "../assets/login.json";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";

function login() {
    const router = useRouter();
    const [{ userInfo, newUser }, dispatch] = useStateProvider();

    useEffect(() => {
        if (userInfo?.id && !newUser) {
            router.push("/");
        }
    }, [userInfo, newUser]);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const {
            user: { displayName: name, email, photoURL: profileImage },
        } = await signInWithPopup(firebaseAuth, provider);
        try {
            if (email) {
                const { data } = await axios.post(CHECK_USER_ROUTE, { email });
                if (!data.status) {
                  dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
                  dispatch({
                    type: "SET_USER_INFO",
                    userInfo: {
                      name,
                      email,
                      profileImage,
                      status: "Available",
                    },
                  });
                  router.push("/onboarding");
                } else {
                  const {
                    id,
                    name,
                    email,
                    profilePicture: profileImage,
                    status,
                  } = data.data;
                  dispatch({
                    type: "SET_USER_INFO",
                    userInfo: { id, name, email, profileImage, status },
                  });
                  router.push("/");
                }
            }
        } catch (error) {}
    };

    return (
      <div className="grid grid-cols-2 justify-center items-center h-screen gap-6 max-w-7xl mx-auto">
        <div className="">
          <Lottie animationData={banner} loop={true} />
        </div>
        <button className="" onClick={handleLogin}>
          <div className="flex items-center justify-center rounded-lg bg-slate-800 mx-auto p-4">
            <FcGoogle className="text-4xl " />
            <span className="text-white text-xl">Login With Google</span>
          </div>
        </button>
      </div>
    );
}

export default login;
