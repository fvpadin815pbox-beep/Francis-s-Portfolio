"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <Image
          src="/francis.jpg"
          alt="Francis"
          width={220}
          height={220}
          className="about-img"
        />
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <h3>Web Designer/UI Developer</h3>
          <p>
            I specialize in <strong>Responsive Web Design</strong> and{" "}
            <strong>UI/UX Prototyping</strong>, focusing on crafting layouts
            that adapt seamlessly across devices while ensuring a smooth and
            meaningful user experience.
          </p>
          <p>
            With growing experience in tools like Figma, HTML, CSS, and
            JavaScript, I&apos;m continuously improving my design and development
            skills to bring both aesthetics and usability together.
          </p>
          <Link href="#services" className="btn-outline">
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}
