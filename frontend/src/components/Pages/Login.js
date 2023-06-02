import { useState } from 'react';

import VerifiedSignIn from '../login/VerifiedSignIn';
import UserSignUp from '../login/UserSignUp';
import UserLogin from '../login/UserLogin';

const Login = () => {
  const [userSignUp, setUserSignUp] = useState(true);
  const [userSignIn, setUserSignIn] = useState(false);
  const [verifiedSignIn, setVerfifiedSignIn] = useState(false);

  const verifiedSignInHandler = () => {
    setUserSignUp(false);
    setUserSignIn(false);
    setVerfifiedSignIn(true);
  };

  const signInHandler = () => {
    setUserSignUp(false);
    setVerfifiedSignIn(false);
    setUserSignIn(true);
  };

  return (
    <div className="grid min-h-[calc(100vh-8rem)] w-full place-items-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        {!userSignIn && !verifiedSignIn && (
          <UserSignUp signInHandler={signInHandler} />
        )}
        {!userSignUp && !verifiedSignIn && <UserLogin />}
        {!userSignUp && !userSignIn && <VerifiedSignIn />}
        {!verifiedSignIn && (
          <p className=" text-md text-center font-montserrat font-normal tracking-wide text-[#e1e1e1] ">
            Ako ste verifikovani event kreator loginujte se,{' '}
            <button onClick={verifiedSignInHandler} className="text-[#C25452]">
              sign in!
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
