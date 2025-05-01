import React from 'react';
import studentImg from '../assets/images/boy-image.png'; 

const Hero = () => {
  return (
    <section className="bg-[#fef3ed]  flex items-center px-6 lg:px-20 font-sans">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-sm">
            eLearning Platform
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Smart Learning<br />
            Deeper & More<br />
            <span className="text-orange-600">-Amazing</span>
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-md">
            Unlock your full potential with engaging, intuitive learning tools crafted for serious growth. Join thousands mastering new languages with ease!
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition shadow-md text-sm">
              Start Free Trial →
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white text-lg shadow-lg">
                ▶
              </span>
              How it Work
            </button>
          </div>
        </div>

        {/* Right Image + Background */}
        <div className="relative lg:w-1/2 flex justify-center items-center min-h-[500px] lg:min-h-[600px]">
          {/* Decorative Background Shapes */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-teal-400 rounded-xl rotate-12 opacity-80 -z-10 shadow-xl"></div>
          <div className="absolute top-28 right-0 w-40 h-40 bg-orange-500 rounded-xl -rotate-12 opacity-70 -z-10 shadow-lg"></div>

          {/* Student Image */}
          <img
            src={studentImg}
            alt="Student"
            className="h-full object-contain z-10 max-h-[600px] drop-shadow-2xl"
          />

          {/* Floating Icons */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="absolute top-4 right-4 w-8 animate-bounce"
          />
          <img
            src="https://img.icons8.com/fluency/48/checked.png"
            alt="Check Icon"
            className="absolute top-16 left-8 w-10 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
