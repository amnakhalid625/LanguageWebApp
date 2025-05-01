import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Ahmed Raza',
    title: 'IELTS Student',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'The IELTS preparation course helped me achieve Band 8. The instructors were extremely knowledgeable and the practice tests mirrored the actual exam perfectly.',
  },
  {
    name: 'Fatima Khan',
    title: 'German Student',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'I completed A2 level in just 3 months. The teachers adapt to each student\'s learning pace, which made all the difference for me.',
  },
  {
    name: 'Bilal Ahmed',
    title: 'Chinese Student',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'From zero to HSK 2 in 6 months! The character writing techniques they teach are incredibly effective for memorization.',
  },
  {
    name: 'Sana Malik',
    title: 'French Student',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    text: 'The DELF B1 course gave me both language skills and cultural knowledge. I now feel confident speaking with native speakers.',
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-white px-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
           Student Feedback
          </h2> 
          
           <p className="text-md text-gray-600">What our students say about our language programs</p>
        </div>
        

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'w-2 h-2 bg-gray-300 rounded-full inline-block mx-1 transition-all',
              bulletActiveClass: 'bg-primary w-4',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 h-full border-l-4 border-primary">
                  <div className="flex items-center mb-4">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    /> */}
                    <div>
                      <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination container outside the cards */}
          <div className="testimonial-pagination text-center mt-8" />
        </div>
      </div>

      {/* Custom pagination styles */}
      <style jsx>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #f97316;
          width: 16px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;