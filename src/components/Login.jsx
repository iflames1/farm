// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-white w-11/12 m-auto py-16">
      <div className="m-auto max-w-md p-4 bg-gray-100 rounded-md shadow-md">
        <h1 className="md:text-3xl text-xl text-center pb-8 font-bold">
          Login
        </h1>
        <form className="grid gap-8">
          {/* Email Address */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="mt-1 p-2 w-full border rounded-md outline-none border-[#008033]"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="mt-1 p-2 w-full border rounded-md outline-none border-[#008033]"
          />
          <div className="flex justify-between pb-4">
            <label className="space-x-2 items-center flex">
              <input type="checkbox" />
              <p>Remember me</p>
            </label>
            <Link to="">Forgot Password?</Link>
          </div>

          {/* Buttons */}
          <Link
            to="/Home"
            type="submit"
            className="bg-[#008033] text-white p-2 py-4 rounded-md hover:bg-green-600 text-center text-lg "
          >
            Log In
          </Link>
        </form>
        <h1 className="py-10 md:text-xl font-bold text-center">OR</h1>
        <div className="grid gap-6 pb-8">
          {/* Sign up with Facebook */}
          <Link
            to="/Home"
            type="submit"
            className="bg-white text-center rounded-lg text-black hover:font-bold py-4 md:text-lg border border-black hover:border-[#008033] hover:text-[#008033]"
          >
            Log In with Facebook
          </Link>

          {/* Sign up with Instagram */}
          <Link
            to="/Home"
            type="submit"
            className="bg-white text-center rounded-lg text-black hover:font-bold py-4 md:text-lg border border-black hover:border-[#008033] hover:text-[#008033]"
          >
            Log In with Instagram
          </Link>
        </div>
        <Link
          to="/Register"
          onClick={handleClick}
          className="text-center md:text-lg"
        >
          <p className="">Don{"'"}t have an account? Register</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
