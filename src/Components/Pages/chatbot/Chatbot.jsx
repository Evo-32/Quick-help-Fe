import React from 'react'
import "./Chatbot.css"

const Chatbot = () => {
  return (
    <div className="show-chatbot">
    <button className="chatbot-toogler">
      <span className="material-symbols-outlined">mode-comment</span>
      <span className="material-symbols-outlined">close</span>
    </button>

    <div className="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span className="material-symbols-outlined">close</span>
      </header>

      <ul className="chatbox">
        <li className="chat incoming">
          <span className="material-symbols-outlined"></span>
          <p>Hi there, <br />How can i help you</p>
        </li>
      </ul>
      <div className="chat-input">
        <textarea placeholder="Enter your message..." required></textarea>
        <span id="send-btn" class="material-symbols-outlined"></span>
      </div>
    </div>

    <script src="main.js"></script>
  </div>
  )
}

export default Chatbot