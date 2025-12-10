"use client";

import Link from "next/link";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging designs.",
  },
  {
    title: "Mobile App Design",
    description: "Designing seamless mobile experiences.",
  },
  {
    title: "Website Design",
    description: "Building responsive, beautiful websites.",
  },
  {
    title: "Web Development",
    description: "Developing interactive and smooth web apps.",
  },
  {
    title: "Brand Strategy",
    description: "Creating strong visual brand identities.",
  },
  {
    title: "SEO/Marketing",
    description: "Improving visibility and online growth.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <h3 className="section-subtitle">SERVICE</h3>
      <h2 className="section-title">My Specialties</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="btn-nav">
        <Link href="#about" className="btn-outline">
          ← Previous
        </Link>
      </div>
    </section>
  );
}
