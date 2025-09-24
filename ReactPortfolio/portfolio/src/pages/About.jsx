import React from "react";

export default function About() {
  return (
    <section>
      <h1 className="tw-text-3xl tw-font-bold">About Me</h1>
      <div className="tw-mt-6 tw-grid md:tw-grid-cols-2 tw-gap-6 tw-items-start">
        <div>
          <p className="tw-text-gray-700">I am a frontend developer specialized in React and modern CSS. I create responsive, accessible, and animated user interfaces.</p>
          <ul className="tw-mt-4 tw-space-y-2">
            <li>• JavaScript (ES6+)</li>
            <li>• React, React Router, Framer Motion</li>
            <li>• Tailwind CSS, responsive design</li>
            <li>• Django backend integration (contact mail)</li>
          </ul>
        </div>

        <div>
          <img src="/src/assets/about.jpg" alt="About me" loading="lazy" className="tw-w-full tw-rounded-lg tw-h-64 tw-object-cover"/>
        </div>
      </div>
    </section>
  );
}
