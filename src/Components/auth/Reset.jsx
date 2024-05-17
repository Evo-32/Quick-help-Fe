import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    // Reset any previous error messages
    setError('');

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === '' && trimmedPassword === '') {
        setError('Please fill in both email and password.');
        return;
    }

    if (trimmedEmail === '') {
        setError('Please enter your email.');
        return;
    }

    if (trimmedPassword === '') {
        setError('Please enter your password.');
        return;
    }

    if (!trimmedEmail.includes('@gmail.com') && !trimmedEmail.includes('@net.com')) {
        setError('Email must be a valid Gmail or Net address.');
        return;
    }

    if (trimmedPassword.length < 7) {
        setError('Password must be at least 7 characters long.');
        return;
    }

    // Proceed with sign-in logic (e.g., make API call)
    console.log('Signing in...');
};


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing in email field
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error when user starts typing in password field
  };

  return (
    <div className="bg-gray-50  min-h-screen flex items-center justify-center  mx-auto max-w-full-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl bold text-blue-400 sm:text-3xl">
          Quick Help
        </h1>
        <form
          onSubmit={handleReset}
          action="#"
          className="bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-pink-500 text-lg font-medium">
            Reset
          </p>

          <div className="relative">
            <input
              type="email"
              className="bg-white w-full rounded-lg border-gray-200 p-4 text-black-400 pe-12 text-sm shadow-sm"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="relative">
            <input
              type="password"
              className="bg-white w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-blue-400 shadow-sm"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <a href="/setnew"><button
            type="submit"
            className={`block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white mt ${
              error ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={error !== ""}
          >
            Reset
          </button></a>
        </form>
      </div>
    </div>
  );
};

export default Signin;
