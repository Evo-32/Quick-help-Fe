import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward, MdCheck } from "react-icons/md";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Initial animation properties (off-screen and invisible)
      animate={{ opacity: 1, y: 0 }} // Animation properties to animate to (on-screen and visible)
      transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
    >
      <div className="bg-[#fafafa] min-h-screen flex flex-col items-center justify-center p-5 text-gray-700 mt-7">
        <div className="relative mx-auto max-w-full px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4">
          <div className="home-info text-center md:text-left flex-col">
            <h3 className="hello text-4xl font-bold mb-4 text-yellow-400">
              Find talent your way
            </h3>
            <p className="text-gray-700">
              Don't get stuck at home cleaning.
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <button className="bg-yellow-400 rounded-full hover:bg-yellow-300 hover:text-white text-white sm:px-6 mt-4">
              <a href="/signin" className="flex items-center py-2 px-4">
                Contact us
                <MdArrowOutward />
              </a>
            </button>
          </div>

          <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-0 lg:flex  lg:items-center lg:justify-between">
                <div className="relative flex items-center ">
                  <div className="absolute bottom-0 left-0 z-10 bg-yellow-500 p-4 rounded-lg shadow-lg">
                    <ul>
                      <li className="flex items-center">
                        <MdCheck className="bg-white border rounded-full" />
                        The best for every budget
                      </li>
                      <li className="flex items-center">
                        <MdCheck className="bg-white border rounded-full" />
                        Quality work done quickly
                      </li>
                      <li className="flex items-center">
                        <MdCheck className="bg-white border rounded-full" />
                        Protected payments
                      </li>
                      <li className="flex items-center">
                        <MdCheck className="bg-white border rounded-full" />
                        24/7 support
                      </li>
                    </ul>
                  </div>

                  <img
                    className="rounded-lg shadow-lg border h-100 lg:h-120 w-auto max-w-full object-cover mt-10"
                    src="https://i.pinimg.com/564x/89/2b/d6/892bd624e1196ee8aa33d99133aac072.jpg"
                    alt="Example Image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
