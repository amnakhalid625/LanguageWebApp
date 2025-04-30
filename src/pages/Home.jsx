import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#f9f6f1] min-h-screen px-6 py-12 font-sans">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Which <span className="text-orange-600 italic">language</span> do you want to learn?
          </h1>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md">
            {[
              { label: 'Spanish (Mexico)', flag: '🇲🇽' },
              { label: 'Spanish (Spain)', flag: '🇪🇸' },
              { label: 'French', flag: '🇫🇷' },
              { label: 'German', flag: '🇩🇪' },
              { label: 'Italian', flag: '🇮🇹' },
              { label: 'More', icon: '+' },
            ].map(({ label, flag, icon }, i) => (
              <button
                key={i}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <span className="text-lg">{flag || icon}</span>
                <span className="text-gray-800 font-medium text-sm">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 grid grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Group talking"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Car door"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1542736667-069246bdbc74"
              alt="Coffee"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl bg-red-800 text-white p-4 shadow-md">
            <p className="font-bold">A Cultural History Of Coffee</p>
            <p className="text-sm mt-1">By Steph Koyfman</p>
          </div>
          <div className="rounded-xl bg-yellow-100 text-yellow-900 p-4 shadow-md">
            <h3 className="text-xl font-bold">Newcomer</h3>
            <p className="text-sm">10 courses</p>
          </div>
          <div className="rounded-xl bg-green-500 text-white p-4 shadow-md">
            <h3 className="text-xl font-semibold">Share your weekend plans</h3>
            <p className="text-sm mt-1">Daily Life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
