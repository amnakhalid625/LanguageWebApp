import React from 'react';

const Courses = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            HOME OF LANGUAGES
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">
            FROM THE PROFESSORS OF UNIVERSITY OF THE PUNJAB & HALLMARK EDUCATION
          </p>
        </div>

        {/* Language Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* English */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">English Courses</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Spoken English</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>IELTS Preparation</span>
              </li>
            </ul>
          </div>

          {/* German */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">German Courses (A1-C1)</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Goethe Test Preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Interview Techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Fluency Development</span>
              </li>
            </ul>
          </div>

          {/* Chinese */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Chinese Courses (HSK Levels)</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>HSK Test Preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Interview Techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Fluency Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Character Writing</span>
              </li>
            </ul>
          </div>

          {/* French */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">French Courses (A1-B2)</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>DELF Test Preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Interview Techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Fluency Development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Banner */}
        <div className="bg-orange-600 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">SALIENT FEATURES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Online & Physical Classes</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Audio/Video Recorded Lectures</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>More than 90% Results</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Pay Only If Satisfied</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;