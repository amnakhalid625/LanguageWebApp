import React from 'react';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import studentImg from '../assets/images/main-img.png';
import Card from '../components/Card';
import About from '../pages/About';
import Courses from '../components/Courses';
import VideoLectures from '../components/VideoLectures';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonails';

const Hero = () => {
  return (
    <>
    <section className="bg-background py-12 md:py-20 px-6 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 text-center md:text-center lg:text-left">
            <div className="inline-block bg-orange-100 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-sm">
              Language Learning Platform
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight md:leading-snug">
              Learn Languages<br />
              Faster & <span className="text-primary italic">Fluently</span>
            </h1>

            <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Unlock your full potential with engaging, intuitive learning tools crafted for serious growth. Join thousands mastering new languages with ease!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md text-sm">
                Start Free Trial <FiArrowRight className="text-base" />
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-800  transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                  <FiPlay className="text-lg ml-0.5" />
                </span>
                How it Works
              </button>
            </div>
          </div>

          {/* Image - Shows second on mobile/tablet */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {/* Decorative elements */}
            <div className="hidden lg:block absolute top-10 right-10 w-48 h-48 bg-teal-400 rounded-xl rotate-12 opacity-80 -z-10 shadow-xl"></div>
            <div className="hidden lg:block absolute top-28 right-0 w-40 h-40 bg-orange-500 rounded-xl -rotate-12 opacity-70 -z-10 shadow-lg"></div>

            <img
              src={studentImg}
              alt="Student learning languages"
              className="h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain z-10 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>


<Card />
<About />
<Courses />
<VideoLectures />
<FAQ />
<Testimonials/>

    </>
  );
};

export default Hero;
