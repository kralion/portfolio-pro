"use client";
import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { name, email };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxQTyvQQGDLmkyc3Xj0A5mdU4jpXQAM2pt-YV7EFNUzFQ6PrrUyG2C78uqfP4uXTCOn-g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Data sent successfully! Result: " + result.result);
      } else {
        alert("Error sending data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-400 w-full"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-400 w-full"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 mt-4 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-400 w-full"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>

      <button
        className="w-full px-4 py-2 mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-white rounded-md font-bold shadow-lg "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
