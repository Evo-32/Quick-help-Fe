import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    setError("");

    if (!fullName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !passwordConfirmation.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@gmail.com")) {
      setError("Email must be a valid Gmail address.");
      return;
    }

    if (password.length < 7) {
      setError("Password must be at least 7 characters long.");
      return;
    }

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Signup successful!");
  };

  return (
    <main className="bg-[#fafafa] flex items-center justify-center">
      <div className="max-w-xl lg:max-w-3xl">
        <form
          onSubmit={handleSignup}
          className="bg-yellow-100 mt-8 grid grid-cols-6 gap-6 mb-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Password Confirmation
            </label>
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          {error && <p className="col-span-6 text-red-500 text-sm">{error}</p>}

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="rounded-md border-gray-200 bg-white shadow-sm"
              />
              <span className="text-sm text-gray-700">
                I want to receive emails about events.
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-block rounded-md bg-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?{" "}
              <Link to="/signin" className="text-gray-700 underline">
                Log in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
