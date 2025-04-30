import React from 'react';
import studentImg from '../assets/images/boy-image.png'; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="bg-[#fef3ed] py-16 px-6 lg:px-24 font-sans">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            eLearning Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Smart Learning<br />
            Deeper & More<br />
            <span className="text-orange-600">-Amazing</span>
          </h1>
          <p className="text-gray-700 mt-4 text-base sm:text-lg">
            Phosfluorescently deploy unique intellectual capital without enterprise – after bricks & clicks synergy. Enthusiastically revolutionize intuitive.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition text-sm">
              Start Free Trial →
            </button>
            <button className="flex items-center gap-2 text-sm font-medium">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white text-lg">▶</span>
              How it Work
            </button>
          </div>
        </div>

        {/* Right Image & Decorations */}
        <div className="relative lg:w-1/2 flex justify-center">
          {/* Background shapes */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-teal-400 rounded-lg rotate-12 opacity-80 -z-10"></div>
          <div className="absolute top-20 right-0 w-40 h-40 bg-orange-500 rounded-lg -rotate-12 opacity-70 -z-10"></div>

          {/* Main Student Image */}
          <img
            src={studentImg}
            alt="Student"
            className="w-[300px] sm:w-[400px] z-10"
          />

          {/* Floating icons */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="absolute top-4 right-4 w-8"
          />
          <img
            src="https://img.icons8.com/fluency/48/checked.png"
            alt="Check Icon"
            className="absolute top-16 left-8 w-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
