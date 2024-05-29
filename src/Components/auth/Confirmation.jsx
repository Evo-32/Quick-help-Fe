import React, { useState } from "react";
import axios from "axios";

const Confirmation = () => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState("");

  const handleConfirmation = (e) => {
    e.preventDefault();

    if (confirmationCode.trim() === "") {
      setError("Please enter the confirmation code.");
      return;
    }

    setError("");
  };

  const handleConfirmationCodeChange = (e) => {
    setConfirmationCode(e.target.value);

    try {
      axios
        .post(
          "https://quickhelp-2.onrender.com/api/v1/auth/verify",
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
    setError("");
  };

  return (
    <div className="bg-[#fafafa] mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl text-blue-400 sm:text-2xl">
          Quick help
        </h1>
        <form
          onSubmit={handleConfirmation}
          action="#"
          className="bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-pink-500 text-lg font-medium">
            Enter Confirmation Code
          </p>

          <div className="grid grid-cols-6 gap-2 mt-4">
            <div className="relative">
              <input
                type="text"
                maxLength={1}
                className="bg-gray-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 text-center text-sm shadow-sm"
                placeholder=""
                onChange={(e) => handleConfirmationCodeChange(e)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                maxLength={1}
                className="bg-gray-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 text-center text-sm shadow-sm"
                placeholder=""
                onChange={(e) => handleConfirmationCodeChange(e)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                maxLength={1}
                className="bg-gray-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 text-center text-sm shadow-sm"
                placeholder=""
                onChange={(e) => handleConfirmationCodeChange(e)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                maxLength={1}
                className="bg-gray-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 text-center text-sm shadow-sm"
                placeholder=""
                onChange={(e) => handleConfirmationCodeChange(e)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                maxLength={1}
                className="bg-gray-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 text-center text-sm shadow-sm"
                placeholder=""
                onChange={(e) => handleConfirmationCodeChange(e)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                maxLength={1}
                className="bg-gray-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 text-center text-sm shadow-sm"
                placeholder=""
                onChange={(e) => handleConfirmationCodeChange(e)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
          >
            <a href="/">Confirm</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Confirmation;
