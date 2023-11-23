import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-white">
      <h2 className="text-center pt-2 md:pt-10 text-2xl md:text-4xl font-bold">
        Farm Connect
      </h2>
      <div className="md:w-8/12 w-10/12 md:py-16 py-8 m-auto">
        <div className="bg-[#F5F5F5]">
          <div className="w-11/12 py-6 m-auto">
            <h1 className="md:text-3xl text-xl text-center pb-8 font-bold">
              Login
            </h1>
            <form className="grid gap-4 items-center">
              {/* Email Address */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="p-4 md:text-2xl w-full border outline-none border-[#008033] rounded-lg mb-8"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="p-4 md:text-2xl w-full border outline-none border-[#008033] rounded-lg mb-8"
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
                className="bg-[#008033] text-center rounded-lg text-white hover:font-bold py-4 md:text-3xl border hover:border-[#008033] hover:bg-white hover:text-[#008033]"
              >
                Log In
              </Link>
            </form>
            <h1 className="py-10 md:text-3xl text-center">OR</h1>
            <div className="grid gap-6 pb-8">
              {/* Sign up with Facebook */}
              <Link
                to="/Home"
                type="submit"
                className="bg-white text-center rounded-lg text-black hover:font-bold py-4 md:text-3xl border border-black hover:border-[#008033] hover:text-[#008033]"
              >
                Sign up with Facebook
              </Link>

              {/* Sign up with Instagram */}
              <Link
                to="/Home"
                type="submit"
                className="bg-white text-center rounded-lg text-black hover:font-bold py-4 md:text-3xl border border-black hover:border-[#008033] hover:text-[#008033]"
              >
                Sign up with Instagram
              </Link>
            </div>
            <Link
              to="/Register"
              onClick={handleClick}
              className="text-center md:text-3xl"
            >
              <p className="">Don't have an account? Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
