import React from "react";
import GoogleIcon from "../MyIcons/google-icon.svg";
import FacebookIcon from "../MyIcons/facebook-icon.svg";

import EllipticalButton from "./MyButtons/EllipticalButton";

export default function SignInPage({ signInWithGoogle, signInWithFacebook }) {
  return (
    <div className="container h-screen mx-auto flex flex-col items-center">
      <div className="login-image relative w-full h-3/6">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-900 absolute brand left-2/4 bottom-3 -translate-x-1/2 mb-8 text-5xl font-black">
          vMark
        </div>
      </div>
      <div className="sign-in w-full h-3/6 flex flex-col items-center">
        <EllipticalButton onClick={signInWithGoogle} className="font-semibold">
          <img src={GoogleIcon} alt="google icon" />
          <p className="mx-auto">Continue with google</p>
        </EllipticalButton>

        <EllipticalButton
          onClick={signInWithFacebook}
          className="font-semibold"
        >
          <img src={FacebookIcon} alt="facebook icon" />
          <p className="mx-auto">Continue with facebook</p>
        </EllipticalButton>
      </div>
    </div>
  );
}
