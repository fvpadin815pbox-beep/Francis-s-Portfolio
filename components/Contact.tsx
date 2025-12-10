"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        <span>Contact Me!</span>
      </h2>
      <p className="contact-text">
        Let&apos;s work together to transform your ideas into stunning design.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="phone"
            placeholder="Mob. Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>

      <div className="btn-nav">
        <Link href="#home" className="btn-outline">
          ← Back to HOME
        </Link>
        <Link href="#services" className="btn-outline">
          ← Previous
        </Link>
      </div>
    </section>
  );
}
