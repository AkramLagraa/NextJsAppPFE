import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-5 md:flex-row">
        <div className="w-full md:w-2/3 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-700">Algerie Telecome</span>
          </div>

          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue-700">
              Sign In To Your Account
            </h2>
            <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
              <MdEmail className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>
            <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
              <RiLockPasswordFill className="text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>

            <div className="flex w-full md:w-64 mb-5 mt-2 justify-between">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="Remember" className="mr-1" />
                Remember Me
              </label>
              <Link href="./Login/ForgetPassword" className="text-xs">
                Forget Password?
              </Link>
            </div>
            <a
              href="/MainPage/CreateProject/id"
              className="border-2 border-blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white"
            >
              Sign In
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-blue-500 text-white rounded-tr-xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Welcome Again</h2>
          <div className="border-2 w-10 inline-block border-white mb-2"></div>
          <p className="mb-2">Fill Your Information Quickly and start</p>
          <a
            href="/Signup"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
