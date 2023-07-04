import { useContext } from 'react';

import VerifiedSignIn from '../Login/VerifiedSignIn';
import AuthContext from '../../context/auth-context';
import ThemeContext from '../../context/theme-context';

const Login = () => {
  const authCtx = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="grid min-h-[calc(100vh-8rem)] w-full place-items-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <VerifiedSignIn />
        <p
          className={` text-md text-center font-montserrat font-normal tracking-wide ${
            theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
          } `}
        >
          Ako ste obični korisnik loginujte se preko{' '}
          <button
            onClick={() => authCtx.googleAuth()}
            className="text-[#C25452] underline"
          >
            Google-a!
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
