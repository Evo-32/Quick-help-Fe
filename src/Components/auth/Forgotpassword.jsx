import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forgotpassword = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignin = (e) => {
        e.preventDefault();

        if (email.trim() === '') {
            setError("Please fill in both email and password.");
            return;
        }

        if (!email.includes("@gmail.com") && !email.includes("@net.com")) {
            setError("Email must be a valid Gmail address.");
            return;
        }

        // Clear error if validation passes
        setError("");
        // Proceed with sign-in logic
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(""); // Clear error when user starts typing in email field
    };
  return (
       
            <div className="bg-[#fafafa] mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <form
                        onSubmit={handleSignin}
                        action="#"
                        className="bg-yellow-100 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >
                        <div className="relative">
                            <input
                                type="email"
                                className="bg-white w-full rounded-lg border-gray-200 p-4 text-blue-400 pe-12 text-sm shadow-sm"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
                        >
                            <Link to="/setnew">Next</Link>
                        </button>
    
                    </form>
                </div>
            </div>
        );
    };
export default Forgotpassword