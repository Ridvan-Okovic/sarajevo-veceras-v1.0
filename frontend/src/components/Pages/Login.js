import { useContext, useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  let message = '';
  const signInHandler = (e) => {
    e.preventDefault();
    authCtx.authenticate(emailRef.current.value, passRef.current.value);
  };

  useEffect(() => {
    if (authCtx.success) {
      setTimeout(() => {
        navigate('/events');
      }, 500);
    }
  }, [authCtx.success, navigate]);

  const signOutHandler = () => {
    signOut(auth);
  };

  console.log(authCtx.success);

  const emailRef = useRef();
  const passRef = useRef();

  return (
    <div className="grid w-full place-items-center">
      <h3 className="mt-8 mb-8 text-center font-montserrat text-2xl font-normal tracking-wide text-[#e1e1e1] sm:text-4xl md:text-5xl">
        If you are already a verified event creator,{' '}
        <span className="text-[#C25452]">sign in!</span>
      </h3>
      <form
        onSubmit={signInHandler}
        className=" flex w-96 flex-col gap-4 rounded bg-zinc-900 px-6 py-10 shadow-lg"
      >
        <div className="flex flex-col gap-1">
          <label className="text-lg text-[#e1e1e1]">Email</label>
          <input
            ref={emailRef}
            className="rounded bg-zinc-800 bg-opacity-50 p-2 text-[#e1e1e1] shadow outline-none focus:border focus:border-zinc-500"
            type="email"
            placeholder="test@example.com"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-[#e1e1e1]">Password</label>
          <input
            ref={passRef}
            className="rounded bg-zinc-800 bg-opacity-50 p-2 text-[#e1e1e1] shadow outline-none focus:border focus:border-zinc-500"
            type="password"
            placeholder="••••••••"
          ></input>
        </div>
        <button
          onClick={signInHandler}
          type="submit"
          className="flex items-center justify-center rounded border border-[#C25452] py-1 px-4 text-lg text-[#C25452] duration-200 hover:bg-[#C25452] hover:text-white active:bg-[#8f3836]"
        >
          Sign in
        </button>
      </form>
      <button className="text-[#e1e1e1]" onClick={signOutHandler}>
        Sign out
      </button>
      {message}
    </div>
  );
};

export default Login;
