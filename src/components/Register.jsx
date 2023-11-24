// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-white w-11/12 m-auto py-16">
      <div className="m-auto max-w-md p-4 bg-gray-100 rounded-md shadow-md">
        <h1 className="md:text-3xl text-xl text-center pb-8 font-bold">
          Register
        </h1>
        <form className="grid gap-8 ">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="mt-1 p-2 w-full border rounded-md outline-none border-[#008033]"
          />

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

          <h1 className="md:text-2xl text-lg font-bold">Account Type</h1>

          {/* Radio Options */}
          <div className="grid gap-2 md:text-xl">
            <label className="flex space-x-2 items-center">
              <input
                type="radio"
                name="accountType"
                value="Wholesaler/Retailer"
              />
              <p>Wholesaler/Retailer</p>
            </label>
            <label className="flex space-x-2 items-center">
              <input
                type="radio"
                name="accountType"
                value="Farmer"
                className=""
              />
              <p>Farmer</p>
            </label>
            <label className="flex space-x-2 items-center">
              <input type="radio" name="accountType" value="Logistics" />
              <p>Logistics</p>
            </label>

            <p className="py-6 md:text-xl">
              By activating your account, you agree to our <u>terms</u> and{" "}
              <u>privacy policy</u>
            </p>
          </div>

          {/* Buttons */}
          <Link
            to="/Home"
            type="submit"
            className="bg-[#008033] text-white p-2 py-4 rounded-md hover:bg-green-600 text-center text-lg "
          >
            Create Account
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
            Sign up with Facebook
          </Link>

          {/* Sign up with Instagram */}
          <Link
            to="/Home"
            type="submit"
            className="bg-white text-center rounded-lg text-black hover:font-bold py-4 md:text-lg border border-black hover:border-[#008033] hover:text-[#008033]"
          >
            Sign up with Instagram
          </Link>
        </div>
        <Link
          to="/Login"
          onClick={handleClick}
          className="text-center md:text-lg"
        >
          <p>Already have an account? Log In</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
