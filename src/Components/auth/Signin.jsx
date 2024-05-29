// Components/auth/Signin.js
import React, { useState } from "react";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignin = async (e) => {
    e.preventDefault();

    // Clear any previous error
    setError('');

    try {
      const response = await axios.post('https://quickhelp-2.onrender.com/api/v1/auth/login', {
        email,
        password
      }, {
        headers: {
          "Content-Type": 'application/json',
        },
      });

      const { user } = response.data;

      if (user.role === 'admin') {
        login(user);
        navigate('/dashboard'); // Navigate to the dashboard route
      } else {
        login(user);
        navigate('/user-dashboard'); // Navigate to the user dashboard route
      }

    } catch (error) {
      setError('Invalid credentials');
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center mx-auto max-w-full-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl bold text-blue-400 sm:text-3xl">
          Quick Help
        </h1>
        <form
          onSubmit={handleSignin}
          className="bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-pink-500 text-lg font-medium">
            Sign in
          </p>

          <div className="relative">
            <input
              type="email"
              className="bg-white w-full rounded-lg border-gray-200 p-4 text-black-400 pe-12 text-sm shadow-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-span-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="Password"
                name="password"
                placeholder="Password"
                className="bg-white w-full rounded-lg border-gray-200 p-4 text-black-400 pe-12 text-sm shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-1 text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <button
            type="submit"
            className={`block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white mt-2 ${
              error ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={error !== ""}
          >
            Sign in
          </button>

          <p className="text-blue-500 text-center text-sm">
            No account?
            <a href="/signup" className="underline"> Sign up </a>
          </p>

          <p className="text-center mt-2">
            <a href="/setnew" className="text-blue-500"> Forgot Password? </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
