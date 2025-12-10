"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Image
        src="/francis.jpg"
        alt="Francis"
        width={150}
        height={150}
        className="profile-img"
        priority
      />
      <h1>
        Hello, I&apos;m <span>Francis</span>, Web Designer/UI Developer
      </h1>
      <p className="hero-desc">
        A Computer Science student at Florida State University and an aspiring
        Web Designer/UI Developer. I&apos;m passionate about crafting visually
        engaging, user-centered designs and turning creative ideas into
        functional, responsive websites. With a growing interest in front-end
        development and design tools like Figma, I aim to blend aesthetics with
        technology to create meaningful digital experiences.
      </p>
      <div className="social-icons">
        <a href="#">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
        <a href="#">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            alt="Twitter"
            width={40}
            height={40}
          />
        </a>
        <a href="#">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
        <a href="#">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="Facebook"
            width={40}
            height={40}
          />
        </a>
      </div>
      <Link href="#contact" className="btn-primary">
        Contact me
      </Link>
    </section>
  );
}
