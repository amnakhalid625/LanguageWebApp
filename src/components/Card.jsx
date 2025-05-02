import React from 'react';
import { FaBookOpen, FaKeyboard, FaUserFriends, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

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

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className="text-center py-16 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.p
          className="text-sm text-primary font-semibold uppercase mb-2"
          variants={cardVariants}
        >
          In 4 Easy Steps
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10"
          variants={cardVariants}
        >
          How to Learn with LangLab<br />
          <span className="font-semibold">Your structured language journey</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
              variants={cardVariants}
            >
              <div className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full ${step.bgColor} mb-4`}>
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <WhatsAppButton />
    </>
  );
};

export default Card;
