import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <img
          src="/profile.jpg"
          alt="Aravind Ratheesh"
          className="w-32 h-32 rounded-full mx-auto shadow-md"
        />
        <h1 className="text-3xl font-bold mt-4">Aravind Ratheesh</h1>
        <p className="text-gray-600">Cyber Security Engineer | Pentester | Developer</p>
        <div className="mt-4">
          <a
            href="/ARAVIND_RATHEESH_Resume.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">
          Cyber Security Engineer experienced in threat analysis, vulnerability assessment, and penetration testing of web
          applications. Proven record of collaborating with technical and business teams to design secure systems and
          mitigate cyber risks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <h3 className="font-bold text-lg">Security Labz – Cybersecurity Platform</h3>
              <p className="text-sm text-gray-600">Developed tools like Network Scanner, API Scanner, XSS & SQLi Checker using React, Node.js, MongoDB.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="font-bold text-lg">Real Energy Monitoring System</h3>
              <p className="text-sm text-gray-600">IoT-based real-time household energy monitoring using Blynk platform.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="font-bold text-lg">Automobile Electrical Wiring</h3>
              <p className="text-sm text-gray-600">Rewired and installed electrical kit of Maruti Omni.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="font-bold text-lg">E-Bike Workshop</h3>
              <p className="text-sm text-gray-600">Converted bicycle into electric bike; trained 10+ students.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Netsach Global</strong> – Security Analyst & Developer (Jul 2024 – Present)</li>
          <li><strong>Sutherland Global Services</strong> – Customer Executive (Sep 2023 – Jun 2024)</li>
          <li><strong>Ford Motor Corporation</strong> – Trainee (Apr 2018 – Present)</li>
          <li><strong>IIIC</strong> – Industrial Training (Jun 2024 – Jan 2023)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>B.Tech, Mechanical Engineering</strong> – KMEA College (2020–2023)</li>
          <li><strong>Diploma, Automobile Engineering</strong> – SSM Polytechnic (2017–2020)</li>
          <li><strong>Class X</strong> – Islahiya HSS (2016–2017)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>EHPT+, Burp Suite Mastery, OPSWAT Associate, Tata Cyber Analyst Simulation</li>
          <li>TryHackMe – Advent of Cyber</li>
          <li>Internship – RedTeam Hacker Academy</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">📍 Tirur, Malappuram, Kerala<br />📧 aravindratheeshadr@gmail.com<br />📞 +91-7025127767</p>
        <div className="mt-4 flex gap-4">
          <a href="https://github.com/PATRICKjane7025" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/aravindratheesh" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
