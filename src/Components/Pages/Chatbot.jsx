// import React from "react";
// import { BiSolidBot } from "react-icons/bi";
// import { RxCross2 } from "react-icons/rx";
// import { FaRegMessage } from "react-icons/fa6";

// const Chatbot = () => {
//   return (
//     <div className="show-chatbot hidden">
//       <button className="chatbot-toogler fixed right-10 bottom-9 h-14 w-14 transform rotate-90 flex items-center justify-center text-white rounded-full bg-plum cursor-pointer transition duration-200 ease-in-out">
//         <span className="material-symbols-outlined absolute opacity-0"><FaRegMessage /></span>
//         <span className="material-symbols-outlined opacity-1"><RxCross2 /></span>
//       </button>

//       <div className="chatbot fixed right-10 bottom-16 w-105 transform scale-100 opacity-100 pointer-events-auto bg-whitesmoke overflow-hidden origin-bottom-right rounded-lg shadow-2xl transition-all duration-100 ease-linear z-30">
//         <header className="bg-plum py-4 text-center relative">
//           <h2 className="text-white text-lg">Chatbot</h2>
//           <span className="material-symbols-outlined absolute right-4 top-1/2 text-white cursor-pointer hidden transform -translate-y-1/2"><RxCross2 /></span>
//         </header>

//         <ul className="chatbox h-[475px] overflow-y-auto py-8 px-5">
//           <li className="chat incoming flex">
//             <span className="material-symbols-outlined h-8 w-8 text-white self-end bg-plum text-center leading-8 rounded-md mr-2 mb-1"><BiSolidBot className="flex justify-center  align-center text-2xl"/></span>
//             <p className="text-black bg-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg p-3">
//               Hi there, <br />
//               How can i help you
//             </p>
//           </li>
//         </ul>
//         <div className="chat-input fixed bottom-0 w-full flex gap-5 bg-white p-2 px-5 border-t border-gray-300 ">
//           <textarea className="border-0 outline-none text-sm max-h-[180px] resize-none py-4 px-3 w-full" style="height: 55px;" placeholder="Enter your message..." required></textarea>
//           <span id="send-btn" className="material-symbols-outlined flex items-end h-14 leading-14 text-plum text-lg cursor-pointer invisible"></span>
//         </div>
//       </div>

//       <script src="main.js"></script>
//     </div>
//   );
// };
// export default Chatbot;
