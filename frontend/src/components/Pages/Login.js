import { useContext } from 'react';

import VerifiedSignIn from '../Login/VerifiedSignIn';
import AuthContext from '../../context/auth-context';

const Login = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="grid min-h-[calc(100vh-8rem)] w-full place-items-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <VerifiedSignIn />
        <p className=" text-md text-center font-montserrat font-normal tracking-wide text-[#e1e1e1] ">
          Ako ste obični korisnik loginujte se preko Google-a,{' '}
          <button
            onClick={() => authCtx.googleAuth()}
            className="text-[#C25452]"
          >
            sign in!
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
