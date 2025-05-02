import React from 'react';
import aboutImg from '../assets/images/banner.png';

const About = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 " id='about'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Platform
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <img 
              src={aboutImg} 
              alt="About eLearning Platform" 
              className="w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: '700px' }}
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Smart Learning Deeper & More - Amazing
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Phosfluorescently deploy unique intellectual capital without enterprise-after bricks & clicks synergy. Enthusiastically revolutionize intuitive.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-700">
                  Unique intellectual capital deployment
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-700">
                  Enterprise-level synergy solutions
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-700">
                  Intuitive learning revolution
                </p>
              </div>
            </div>


{/* add pdf to download */}
<a href="#" download={true}>
            <button className="mt-8 bg-primary text-white font-semibold px-6 py-3 rounded hover:bg-orange-700 transition">
              Learn More
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;