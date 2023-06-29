import { useContext, useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';

const VerifiedSignIn = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const signInHandler = (e) => {
    e.preventDefault();
    authCtx.emailAuth(emailRef.current.value, passRef.current.value);
  };

  useEffect(() => {
    if (authCtx.loginSuccess)
      setTimeout(() => {
        navigate('/events');
      }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authCtx.loginSuccess]);

  const emailRef = useRef();
  const passRef = useRef();

  return (
    <>
      <form
        onSubmit={signInHandler}
        className=" flex w-96 flex-col gap-4 rounded bg-zinc-900 px-6 py-10 shadow-lg"
      >
        <h3 className="text-center text-2xl text-[#e1e1e1]">
          Sign in za <span className="text-[#c25452]">event</span> kreatore
        </h3>
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
    </>
  );
};

export default VerifiedSignIn;
