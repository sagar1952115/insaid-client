import React, { useState } from "react";
import "../App.css";
import axios from "axios";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messObj = {
      name: name,
      email: email,
      desc: desc,
    };
    // const messreq = JSON.parse(messObj);

    try {
      const res = await axios.post(
        "https://insaid-server.onrender.com/api/sendmail",
        messObj
      );
      if (res.status === 200) {
        setMessage("sent");
      }
    } catch (err) {
      setMessage("error");
      console.log(err);
    }
  };
  return (
    <div>
      <div className="contact-container">
        <div className="contact-mini-container">
          <div className="contact-left">
            <h1>Contact Us</h1>
            <p>
              Contact Us regarding any type of queries.We provide 24x7 service.
            </p>
          </div>
          <div className="contact-right">
            <div className="contact-right-form">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
              />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
              <textarea
                name=""
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                id=""
                cols="30"
                rows="10"
                placeholder="Write your message"
              ></textarea>
              <button className="contact-btn" onClick={handleSubmit}>
                Send
              </button>
              {message === "error" && (
                <div className="contact-error">Error occured !!!</div>
              )}
              {message === "sent" && (
                <div className="contact-sent">Message sent.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
