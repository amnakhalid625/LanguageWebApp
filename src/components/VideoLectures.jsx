import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

const VideoLectures = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const courses = [
    {
      language: 'English',
      levels: ['Spoken English', 'IELTS Preparation'],
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://example.com/english-lecture.mp4' // Replace with actual video URL
    },
    {
      language: 'German (A1-C1)',
      levels: ['Goethe Exam Prep', 'Conversation Practice'],
      thumbnail: 'https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://example.com/german-lecture.mp4' // Replace with actual video URL
    },
    {
      language: 'Chinese (HSK)',
      levels: ['Character Writing', 'HSK Test Prep'],
      thumbnail: 'https://media.istockphoto.com/id/1441562506/vector/happy-chinese-new-year-invitation-or-greeting-card-design-with-swallow-and-peony-flower.jpg?s=1024x1024&w=is&k=20&c=-qJ1ToMouWM0BCMspXk-x3c8_aXBhlJkznu_JbFPbh0=',
      videoUrl: 'https://example.com/chinese-lecture.mp4' // Replace with actual video URL
    },
    {
      language: 'French (A1-B2)',
      levels: ['DELF Prep', 'Pronunciation'],
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://example.com/french-lecture.mp4' // Replace with actual video URL
    }
  ];

  const handlePlay = (course) => {
    setSelectedVideo(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            <span className="text-orange-600">RECORDED LECTURES</span> LIBRARY
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access premium video lectures from University of the Punjab & Hallmark Education professors anytime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.language} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button 
                    onClick={() => handlePlay(course)}
                    className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition"
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{course.language}</h3>
                <ul className="space-y-2">
                  {course.levels.map((level, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-md shadow transition">
            View All Lecture Series
          </button>
        </div>

        {/* Video Modal */}
        {showModal && selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              >
                <FaTimes />
              </button>
              <video 
                controls 
                autoPlay 
                className="w-full"
                src={selectedVideo.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-gray-800">{selectedVideo.language} Lecture</h3>
                <p className="text-gray-600 mt-1">University of the Punjab & Hallmark Education</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoLectures;