"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div>🧩</div>
        <ul className="nav-links">
          <li>
            <Link href="#home" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Service</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <Link href="#contact" className="btn-outline">
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
