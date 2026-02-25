"use client";

import { useState } from "react";
import AnimateInView from "./AnimateInView";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden bg-gray-50"
    >
      <div className="max-w-7xl mx-auto flex justify-center">
        <AnimateInView variant="scale" className="w-full max-w-md">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3428] mb-12 text-center">
            Get in Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="space-y-4 transition-all duration-300">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#5c4033] mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4a3428] focus:outline-none focus:ring-2 focus:ring-[#4a3428]/20 transition-all duration-200"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5c4033] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4a3428] focus:outline-none focus:ring-2 focus:ring-[#4a3428]/20 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#5c4033] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4a3428] focus:outline-none focus:ring-2 focus:ring-[#4a3428]/20 transition-all duration-200 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-[#4a3428] text-white font-semibold rounded-lg hover:bg-[#5c4033] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>
              {status === "success" && (
                <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}
            </div>
          </form>
        </AnimateInView>
      </div>
    </section>
  );
}
