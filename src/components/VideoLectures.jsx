import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const VideoLectures = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const courses = [
    {
      language: 'English',
      levels: ['Spoken English', 'IELTS Preparation'],
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://www.facebook.com/reel/1110585623519139' 
    },
    {
      language: 'German (A1-C1)',
      levels: ['Goethe Exam Prep', 'Conversation Practice'],
      thumbnail: 'https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://www.facebook.com/reel/1389248291900338' 
    },
    {
      language: 'Chinese (HSK)',
      levels: ['Character Writing', 'HSK Test Prep'],
      thumbnail: 'https://media.istockphoto.com/id/1441562506/vector/happy-chinese-new-year-invitation-or-greeting-card-design-with-swallow-and-peony-flower.jpg?s=1024x1024&w=is&k=20&c=-qJ1ToMouWM0BCMspXk-x3c8_aXBhlJkznu_JbFPbh0=',
      videoUrl: 'https://www.facebook.com/reel/1110585623519139'
    },
    {
      language: 'French (A1-B2)',
      levels: ['DELF Prep', 'Pronunciation'],
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://www.facebook.com/reel/1110585623519139'
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background" id='lectures'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            <span className="text-primary">RECORDED LECTURES</span> LIBRARY
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access video lectures from University of the Punjab & Hallmark Education professors anytime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.language} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePlay(course)}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition"
                  >
                    <FaPlay />
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{course.language}</h3>
                <ul className="space-y-2">
                  {course.levels.map((level, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-700">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary hover:bg-orange-700 text-white font-medium rounded-md shadow transition">
            View All Lecture Series
          </button>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {showModal && selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-black rounded-lg max-w-4xl w-full"
              >
                <button 
                  onClick={closeModal}
                  className="absolute -top-10 right-0 text-white z-10 hover:text-gray-300 transition p-2"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="w-full flex justify-center items-center">
                  {selectedVideo.videoUrl.includes('facebook.com') ? (
                    <div className="w-full" style={{ maxWidth: '640px' }}>
                      <iframe
                        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(selectedVideo.videoUrl)}&show_text=false&width=640`}
                        width="640"
                        height="360"
                        className="w-full border-0"
                        style={{ aspectRatio: '16/9' }}
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={`${selectedVideo.language} Lecture`}
                      ></iframe>
                    </div>
                  ) : (
                    <video 
                      controls 
                      autoPlay 
                      className="max-w-full max-h-[80vh]"
                      style={{ aspectRatio: '16/9' }}
                      src={selectedVideo.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-800">{selectedVideo.language} Lecture</h3>
                  <p className="text-gray-600 text-sm">University of the Punjab & Hallmark Education</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoLectures;
