import { useRef } from 'react';

const UserSignUp = ({ signInHandler }) => {
  const emailRef = useRef();
  const passRef = useRef();
  const displayNameRef = useRef();
  return (
    <>
      <form className=" flex w-96 flex-col gap-4 rounded bg-zinc-900 px-6 pt-10 pb-4 shadow-lg">
        <div className="flex flex-col gap-1">
          <label className="text-lg text-[#e1e1e1]">Username</label>
          <input
            ref={displayNameRef}
            className="rounded bg-zinc-800 bg-opacity-50 p-2 text-[#e1e1e1] shadow outline-none focus:border focus:border-zinc-500"
            type="text"
            placeholder="Display name"
          ></input>
        </div>
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
          type="submit"
          className="flex items-center justify-center rounded border border-[#C25452] py-1 px-4 text-lg text-[#C25452] duration-200 hover:bg-[#C25452] hover:text-white active:bg-[#8f3836]"
        >
          Sign up
        </button>
        <p className="text-center text-[#e1e1e1]">
          Već imate akaunt,{' '}
          <button onClick={signInHandler} className="text-[#C25452]">
            sign in
          </button>
        </p>
      </form>
    </>
  );
};

export default UserSignUp;
