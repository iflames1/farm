// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Contact() {
  // State variables to store form input values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data, e.g., send it to the server
    console.log("Form submitted:", { fullName, email, message });
    // You can add more logic here, like sending the form data to a server
  };

  return (
    <div className="bg-white w-11/12 m-auto py-16">
      <div className="m-auto max-w-md p-4 bg-gray-100 rounded-md shadow-md">
        <h1 className="md:text-3xl text-xl text-center pb-8 font-bold">
          Contact Us
        </h1>
        <form className="grid gap-4 ">
          {/*<form onSubmit={handleSubmit}>*/} {/* Full Name Input */}
          <div className="">
            <label htmlFor="fullName" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="mt-1 p-2 w-full border rounded-md outline-none"
              required
            />
          </div>
          {/* Email Input */}
          <div className="">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john.doe@example.com"
              className="mt-1 p-2 w-full border rounded-md outline-none"
              required
            />
          </div>
          {/* Message Textarea */}
          <div className="">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows="4"
              className="mt-1 p-2 w-full border rounded-md outline-none"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#008033] text-white p-2 rounded-md hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
