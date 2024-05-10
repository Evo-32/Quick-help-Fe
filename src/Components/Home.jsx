import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";

const TypingAnimation = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(type, 200);
    return () => clearTimeout(timeout);
  }, [letterIndex, currentWord, isDeleting]);

  function type() {
    const word = words[currentWordIndex];

    if (!isDeleting && letterIndex <= word.length) {
      setCurrentWord(word.substring(0, letterIndex + 1));
      setLetterIndex(letterIndex + 1);
    } else if (isDeleting && letterIndex >= 0) {
      setCurrentWord(word.substring(0, letterIndex - 1));
      setLetterIndex(letterIndex - 1);
    } else {
      setIsDeleting(!isDeleting);
      if (!isDeleting) {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }
  }

  return <span className="text-pink-500">{currentWord}</span>;
};

const Home = () => {
  const words = ["Quick help"]; // Update with your desired words

  return (
<div className="min-h-screen flex items-center justify-center bg-[#a5bbd3] text-gray-300 p-4">
  <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-0 lg:flex lg:h-screen lg:items-center lg:justify-between">
    <div className="home-info text-center md:text-left flex flex-col justify-center lg:pr-12">
      <h3 className="hello text-4xl font-bold mb-4 text-white">
        Find the Best Freelancer
        <span className="name text-skin-color"></span>
      </h3>
      <h3 className="my-profession text-4xl font-bold mb-4 text-white">
        with <TypingAnimation words={words} />
      </h3>
      <p className="text-gray-700">
        Discover reliable home assistance with Giggle! Hire skilled professionals for all your household needs. Join now and experience convenience at your doorstep.
      </p>
      <div className="flex mt-4 justify-center sm:justify-start hidden sm:block">
        <div className="relative m-2">
          <input
            type="text"
            className="bg-white border rounded-l-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <GoSearch className="text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-pink-600 text-white px-4 py-2 rounded-l-none rounded-r-full hover:bg-pink-400 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 flex justify-center">
      <img
        className="rounded-lg shadow-lg border h-120 lg:h-120 w-auto max-w-full object-cover"
        src="https://i.pinimg.com/564x/6b/0f/a7/6b0fa78302145d040a3d38dc25403d01.jpg"
        alt="Example Image"
      />
    </div>
  </div>
</div>

  );
};

export default Home;
