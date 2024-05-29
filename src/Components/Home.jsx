import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GoSearch } from "react-icons/go";
import About from "./About";
import Employee from "./Employee";
import Contact from "./Contact";

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

  return <span className="text-[#afa3d5]">{currentWord}</span>;
};

const Home = () => {
  const words = ["Quick help"];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className=" min-h-screen flex flex-col items-center justify-center p-5 text-gray-700"
      >
        <div className="relative mt-5 py-16  lg:py-0 lg:flex lg:h-screen lg:items-center lg:justify-between max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="home-info text-center md:text-left flex flex-col justify-center lg:pr-12"
          >
            <h3 className="hello text-4xl font-bold mb-4 text-black">
              Find the Best Freelancer
              <span className="name text-skin-color"></span>
            </h3>
            <h3 className="my-profession text-4xl font-bold mb-4 text-black">
              with <TypingAnimation words={words} />
            </h3>
            <p className="text-gray-700 text-xl">
              Discover reliable home assistance with Quick help! Hire skilled
              professionals for all your household needs. Join now and
              experience convenience at your doorstep.Quck service, Sparkling
              results.
            </p>
            <div className="flex mt-4 justify-center sm:justify-start hidden sm:block text-xl">
              {/* <div className="relative m-2">
                <input
                  type="text"
                  className="bg-white border rounded-l-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GoSearch className="text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="bg-[#afa3d5] text-white px-4 py-2 rounded-l-none rounded-r-full hover:bg-pink-400 transition duration-300"
                >
                  Search
                </button>
              </div> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              className="rounded-lg shadow-lg border h-100 lg:h-120 w-auto max-w-full object-cover"
              src="https://i.pinimg.com/564x/d8/39/66/d83966edf99f1d7e5322503ad4ff57f6.jpg"
              alt="Example Image" 
            />
          </motion.div>
        </div>
      </motion.div>
      <About />
      <Employee />
      <Contact />
    </>
  );
};

export default Home;
