import React from 'react';

const Courses = () => {
  const languages = [
    {
      name: "English",
      level: "",
      features: [
        "Spoken English",
        "IELTS Preparation"
      ]
    },
    {
      name: "German",
      level: "A1-C1",
      features: [
        "Goethe Test Preparation",
        "Interview Techniques",
        "Projects",
        "Fluency Development"
      ]
    },
    {
      name: "Chinese",
      level: "HSK Levels",
      features: [
        "HSK Test Preparation",
        "Interview Techniques",
        "Projects",
        "Fluency Development",
        "Character Writing"
      ]
    },
    {
      name: "French",
      level: "A1-B2",
      features: [
        "DELF Test Preparation",
        "Interview Techniques",
        "Projects",
        "Fluency Development"
      ]
    }
  ];

  const features = [
    "Online & Physical Classes",
    "Audio/Video Recorded Lectures",
    "More than 90% Results",
    "Pay Only If Satisfied"
  ];

  return (
    <section className="py-12 px-6 lg:px-20 bg-gradient-to-b from-gray-50 to-white" id='courses'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            HOME OF LANGUAGES
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            FROM THE PROFESSORS OF UNIVERSITY OF THE PUNJAB & HALLMARK EDUCATION
          </p>
        </div>

        {/* Language Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                {language.name} Courses {language.level && `(${language.level})`}
              </h3>
              <ul className="space-y-3">
                {language.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            SALIENT FEATURES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;