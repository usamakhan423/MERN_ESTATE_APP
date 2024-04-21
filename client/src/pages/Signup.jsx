import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-3 mx-auto max-w-xl">
      <h1 className="font-bold text-center text-3xl py-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase text-lg hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex  gap-1 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-800 font-semibold">Signin</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
