import React from 'react';
import { FaBookOpen, FaKeyboard, FaUserFriends, FaCertificate } from 'react-icons/fa';

const Card = () => {
  const steps = [
    {
      icon: <FaBookOpen className="text-3xl text-white" />,
      title: 'Learn the Basics',
      description: 'Master grammar, vocabulary, and sentence structure.',
      bgColor: 'bg-blue-500',
    },
    {
      icon: <FaKeyboard className="text-3xl text-white" />,
      title: 'Practice Speaking',
      description: 'Improve pronunciation through interactive sessions.',
      bgColor: 'bg-orange-400',
    },
    {
      icon: <FaUserFriends className="text-3xl text-white" />,
      title: 'Join Conversations',
      description: 'Engage in real-time chats with native speakers.',
      bgColor: 'bg-pink-400',
    },
    {
      icon: <FaCertificate className="text-3xl text-white" />,
      title: 'Get Certified',
      description: 'Receive a certificate to showcase your fluency.',
      bgColor: 'bg-purple-500',
    },
  ];

  return (
    <div className="text-center py-16 px-4">
      <p className="text-sm text-blue-500 font-semibold uppercase mb-2">In 4 Easy Steps</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
        How to Learn with LangLab<br />
        <span className="font-semibold">Your structured language journey</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full ${step.bgColor} mb-4`}>
              {step.icon}
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
