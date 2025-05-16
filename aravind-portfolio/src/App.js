import React, { useEffect } from 'react';
import { Card, CardContent } from './card';
import './style.css';
import './animations.css';

export default function HomePage() {
  // Add scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <section className="text-center mb-12">
        <div className="relative inline-block">
          <img
            src="src\Ar.jpg"
            alt="Aravind Ratheesh"
            className="w-32 h-32 rounded-full mx-auto shadow-md profile-img"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 animate-spin-slow opacity-30 blur-md"></div>
        </div>
        <h1 className="text-3xl font-bold mt-4 accent-gradient">Aravind Ratheesh</h1>
        <p className="text-gray-400">Cyber Security Engineer | Pentester | Developer</p>
        <div className="mt-6">
          <a
            href="src\ARAVIND RATHEESH_Cyber Security Engineer_20250514.pdf"
            download
            className="download-button relative group"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300">
              ↓
            </span>
          </a>
        </div>
      </section>

      <section className="mb-10 card p-6 rounded-lg hover:shadow-glow transition-all duration-500">
        <h2 className="text-2xl font-semibold mb-2 accent-gradient">About Me</h2>
        <p className="text-gray-300">
          Cyber Security Engineer experienced in threat analysis, vulnerability assessment, and penetration testing of web
          applications. Proven record of collaborating with technical and business teams to design secure systems and
          mitigate cyber risks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 accent-gradient">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card rounded-lg p-5 hover:shadow-glow">
            <CardContent>
              <h3 className="font-bold text-lg text-white">Security Labz – Cybersecurity Platform</h3>
              <p className="text-sm text-gray-400">Developed tools like Network Scanner, API Scanner, XSS & SQLi Checker using React, Node.js, MongoDB.</p>
            </CardContent>
          </div>
          <div className="card rounded-lg p-5 hover:shadow-glow">
            <CardContent>
              <h3 className="font-bold text-lg text-white">Real Energy Monitoring System</h3>
              <p className="text-sm text-gray-400">IoT-based real-time household energy monitoring using Blynk platform.</p>
            </CardContent>
          </div>
          <div className="card rounded-lg p-5 hover:shadow-glow">
            <CardContent>
              <h3 className="font-bold text-lg text-white">Automobile Electrical Wiring</h3>
              <p className="text-sm text-gray-400">Rewired and installed electrical kit of Maruti Omni.</p>
            </CardContent>
          </div>
          <div className="card rounded-lg p-5 hover:shadow-glow">
            <CardContent>
              <h3 className="font-bold text-lg text-white">E-Bike Workshop</h3>
              <p className="text-sm text-gray-400">Converted bicycle into electric bike; trained 10+ students.</p>
            </CardContent>
          </div>
        </div>
      </section>

      <section className="mb-10 card p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 accent-gradient">Experience</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="fade-in-item"><strong className="text-white">Netsach Global</strong> – Security Analyst & Developer (Jul 2024 – Present)</li>
          <li className="fade-in-item"><strong className="text-white">Sutherland Global Services</strong> – Customer Executive (Sep 2023 – Jun 2024)</li>
          <li className="fade-in-item"><strong className="text-white">Ford Motor Corporation</strong> – Trainee (Apr 2018 – Present)</li>
          <li className="fade-in-item"><strong className="text-white">IIIC</strong> – Industrial Training (Jun 2024 – Jan 2023)</li>
        </ul>
      </section>

      <section className="mb-10 card p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 accent-gradient">Education</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="fade-in-item"><strong className="text-white">B.Tech, Mechanical Engineering</strong> – KMEA College (2020–2023)</li>
          <li className="fade-in-item"><strong className="text-white">Diploma, Automobile Engineering</strong> – SSM Polytechnic (2017–2020)</li>
          <li className="fade-in-item"><strong className="text-white">Class X</strong> – Islahiya HSS (2016–2017)</li>
        </ul>
      </section>

      <section className="mb-10 card p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 accent-gradient">Certifications</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="fade-in-item">EHPT+, Burp Suite Mastery, OPSWAT Associate, Tata Cyber Analyst Simulation</li>
          <li className="fade-in-item">TryHackMe – Advent of Cyber</li>
          <li className="fade-in-item">Internship – RedTeam Hacker Academy</li>
        </ul>
      </section>

      <section className="mb-10 card p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 accent-gradient">Contact</h2>
        <p className="text-gray-300">
          <span className="inline-block mb-2">📍 Tirur, Malappuram, Kerala</span><br />
          <span className="inline-block mb-2">📧 aravindratheeshadr@gmail.com</span><br />
          <span className="inline-block">📞 +91-7025127767</span>
        </p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/PATRICKjane7025" target="_blank" className="social-link text-gray-300 hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/aravindratheesh" target="_blank" className="social-link text-gray-300 hover:text-white">LinkedIn</a>
        </div>
      </section>
      
      <footer className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Aravind Ratheesh. All rights reserved.</p>
      </footer>
    </div>
  );
}