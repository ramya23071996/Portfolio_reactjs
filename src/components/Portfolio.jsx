import React from "react";
import bikeImg from '../assets/bike.png';
import tradingImg from '../assets/trading.png';
import meditationImg from '../assets/meditation.png';
import profileImg from '../assets/profile.jpg';


const skills = [
    "React",
    "Django",
    "Tailwind CSS",
    "JavaScript",
    "Bootstrap",
    "Git & GitHub",
    "Python",
    
];

const projects = [
    {
        title: "Second Hand Bike Website",
        description: "A user-friendly web application that facilitates buying and selling of pre-owned bikes.",
        image: bikeImg,
        live: "https://second-hand-bike-website-rekn.onrender.com",
        code: "https://github.com/ramya23071996/Second-Hand-Bike-Website",
    },
    {
        title: "Traco Trading WEbsite",
        description: "A user-friendly, efficient billing system designed to streamline trading operations and simplify invoicing and inventory management",
        image: tradingImg,
        live: "https://trading-website-g5gl.onrender.com",
        code: "https://github.com/ramya23071996/Trading-Website/tree/main",
    },
    {
        title: "Online Meditation Website",
        description: "An interactive and user-friendly online platform offering guided meditation sessions, breathing exercises, and mindfulness tools to help users reduce stress, improve focus, and enhance overall mental well-being.",
        image: meditationImg,
        live: "https://online-meditation-website-1.onrender.com/ ",
        code: ": https://github.com/ramya23071996/Online-Meditation-Website",
    },
];

export default function PortfolioRamya() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 font-sans">
            {/* Header */}
            <header className="sticky top-0 bg-white shadow-md z-20">
                <div className="flex items-center justify-between px-16 py-6 max-w-7xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-purple-700 tracking-wide">
                        Ramya T.K
                    </h1>
                    <nav className="space-x-8 text-lg text-gray-700 font-semibold">
                        <a
                            href="#home"
                            className="hover:text-purple-900 transition-colors duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:text-purple-900 transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-purple-900 transition-colors duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-purple-900 transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section
                id="home"
                className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-20 max-w-4xl mx-auto"
            >
                <h2 className="text-6xl font-extrabold text-purple-700 mb-6 drop-shadow-md">
                    Hi, I'm Ramya T.K
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
                    Mobile: 9585339524 | Email:{" "}
                    <a
                        href="mailto:ramyasowmiya96@gmail.com"
                        className="underline decoration-purple-400 text-purple-600 hover:text-purple-900"
                    >
                        ramyasowmiya96@gmail.com
                    </a>
                </p>
                <p className="text-lg text-gray-600 max-w-4xl mb-10 leading-relaxed">
                    Experienced professional with 3 years in inventory management and
                    strong skills in React, Django.
                </p>
                <a
                    href="#projects"
                    className="rounded-full bg-purple-600 px-10 py-3 text-white font-semibold shadow-lg shadow-purple-400/50 hover:bg-purple-700 transition-all duration-300"
                >
                    View My Work
                </a>
            </section>

            {/* About */}
            <section
                id="about"
                className="max-w-5xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <img
                    src={profileImg}
                    alt="Ramya T.K profile"
                    className="rounded-full shadow-5xl border-8 border-purple-800 object-cover w-full w-52 h-52 mx-auto"
                />
                <div>
                    <h3 className="text-4xl font-extrabold text-purple-700 mb-6">
                        About Me <span className="text-3xl">👋</span>
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed space-y-4">
                        Intend to work in an Organization where my abilities and skills are
                        fully utilized for the improvement of the Organization and my own
                        knowledge growth.
                    </p>
                    <h4 className="text-2xl text-purple-900 font-bold mb-4">Skills</h4>
                    <div className="flex flex-wrap gap-3 mb-10">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-purple-200 text-purple-900 px-5 py-2 rounded-2xl font-medium hover:bg-purple-300 transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <h4 className="text-2xl text-purple-900 font-bold mb-3">Experience</h4>
                    <div className="space-y-6 text-gray-700">
                        <div className="pl-4 border-l-4 border-purple-400">
                            <p className="font-semibold text-purple-800">
                                Inventory Management at Emerald Jewel Industry
                            </p>
                            <span>3 Years</span>
                            <p>
                                Successfully managed stock and inventory systems, improving
                                efficiency and accuracy.
                            </p>
                        </div>
                        <div className="pl-4 border-l-4 border-purple-400">
                            <p className="font-semibold text-purple-800">Inventory at Pipe Agency</p>
                            <span>1 Year</span>
                            <p>Monitored inventory levels and coordinated resupply activities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
           <section
  id="projects"
  className="max-w-7xl mx-auto px-8 py-20 bg-white rounded-3xl shadow-lg"
>
  <h3 className="text-4xl font-extrabold text-purple-700 mb-12 text-center">
    Projects
  </h3>
  <div className="grid gap-8 md:grid-cols-3">
    {projects.map(({ title, description, image, live, code }) => (
      <div
        key={title}
        className="bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="font-bold text-xl text-purple-900 mb-3">{title}</h4>
          <p className="text-gray-700 flex-grow">{description}</p>
          <div className="mt-6 flex justify-between font-semibold text-purple-900">
            <a
              href={live}
              className="hover:underline hover:text-purple-700 transition"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href={code}
              className="hover:underline hover:text-purple-700 transition"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


            {/* Contact */}
            <section
                id="contact"
                className="max-w-4xl mx-auto px-8 py-24 text-center text-gray-700"
            >
                <h3 className="text-4xl font-extrabold text-purple-700 mb-12">
                    Contact Me
                </h3>
                <form className="flex flex-col gap-6 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="rounded-lg border-2 border-purple-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="rounded-lg border-2 border-purple-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="rounded-lg border-2 border-purple-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center text-gray-500 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
                &copy; {new Date().getFullYear()} Ramya T.K. All rights reserved.
            </footer>
        </div>
    );
}
