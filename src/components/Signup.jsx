"use client"
import Link from "next/link";

export default function Signup() {
   
  const handleSignup = async (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
       
   
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-5 md:flex-row">
        <div className="w-full md:w-2/3 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-700">Algerie Telecome</span>
          </div>

          <form onSubmit={handleSignup} className="py-10">
            <h2 className="text-3xl font-bold text-blue-700">
              Create an Account
            </h2>
            <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>

            <div className="flex flex-col items-center">
              {/* Your input fields go here */}
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>

              <button
                type="submit"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/3 bg-blue-500 text-white rounded-tr-xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Welcome Again</h2>
          <div className="border-2 w-10 inline-block border-white mb-2"></div>
          <p className="mb-2">Already a member? Sign in</p>

          <Link
            href="/"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
