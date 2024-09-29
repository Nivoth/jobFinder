// HeroSectionComponent.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSectionComponent({ isAuthenticated }) {
  return (
    <div className="relative bg-gray-900 bg-opacity-100 py-24 md:py-32 lg:py-40 min-h-[60vh]">
      <div className="absolute inset-0">
        <img
          src="./src/assets/hero.jpg"
          alt="Background Image"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Browse Job
        </h1>
        <p className="text-lg md:text-xl mb-12">
          Welcome to JobNest, the ultimate job search platform designed to
          connect talented professionals with top employers across diverse
          industries.
        </p>
        <Link to={isAuthenticated ? "/find-jobs" : "/login"}>
          <button
            type="button"
            className="hover:bg-[#83B348] text-white text-base tracking-wide px-6 py-3 rounded-[5px] transition border duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            {isAuthenticated ? "Find your dream job now!" : "Find your dream job now!"}
          </button>
        </Link>
      </div>
    </div>
  );
}
