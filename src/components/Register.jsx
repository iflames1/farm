import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
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
          <div className="w-11/12 md:py-6 m-auto">
            <h1 className="md:text-3xl text-xl text-center py-8 font-bold">
              Register
            </h1>
            <form className="grid gap-4 items-center">
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="p-4 md:text-2xl md:w-full w-60 border outline-none border-[#008033] rounded-lg mb-8"
              />

              {/* Email Address */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="p-4 md:text-2xl md:w-full w-60 border outline-none border-[#008033] rounded-lg mb-8"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="p-4 md:text-2xl md:w-full w-60 border outline-none border-[#008033] rounded-lg mb-8"
              />

              <h1 className="md:text-3xl text-xl font-bold">Account Type</h1>

              {/* Radio Options */}
              <div className="grid gap-2 md:text-2xl">
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="Wholesaler/Retailer"
                  />
                  Wholesaler/Retailer
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="accountType"
                    value="Farmer"
                    className=""
                  />
                  Farmer
                </label>
                <label>
                  <input type="radio" name="accountType" value="Logistics" />
                  Logistics
                </label>

                <p className="py-6 md:text-3xl">
                  By activating your account, you agree to our <u>terms</u> and{" "}
                  <u>privacy policy</u>
                </p>
              </div>

              {/* Buttons */}
              <button
                className="bg-[#008033] rounded-lg text-white hover:font-bold py-4 md:text-3xl border hover:border-[#008033] hover:bg-white hover:text-[#008033]"
                type="submit"
              >
                Create Account
              </button>
            </form>
            <h1 className="py-10 md:text-3xl text-center">OR</h1>
            <div className="grid gap-6 pb-8">
              {/* Sign up with Facebook */}
              <button className="bg-white rounded-lg text-black hover:font-bold py-4 md:text-3xl border border-black hover:border-[#008033] hover:text-[#008033]">
                Sign up with Facebook
              </button>

              {/* Sign up with Instagram */}
              <button className="bg-white rounded-lg text-black hover:font-bold py-4 md:text-3xl border border-black hover:border-[#008033] hover:text-[#008033]">
                Sign up with Instagram
              </button>
            </div>
            <Link
              to="/Login"
              onClick={handleClick}
              className="text-center md:text-3xl"
            >
              <p>Already have an account? Log In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
