 import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import About from './Page/About/About';
 

const App = () => {
  return (
    <div className="bg-[#111418] font-sans">
      
      {/* ১. সাইডবার (Fixed) */}
      <aside className="w-72 h-screen fixed left-0 top-0 bg-[#111418] border-r border-gray-800 flex flex-col items-center py-12 z-50">
        <div className="w-44 h-44 rounded-full border-[8px] border-[#343a40] overflow-hidden mb-6">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-12 tracking-wide text-white">Md. Forhad</h2>
        <nav className="flex flex-col space-y-6 text-center w-full text-gray-400 font-medium">
          <a href="#home" className="text-[#20c997]">Home</a>
          <a href="#about" className="hover:text-[#20c997] transition">About Me</a>
          <a href="#services" className="hover:text-[#20c997] transition">What I Do</a>
          <a href="#resume" className="hover:text-[#20c997] transition">Resume</a>
          <a href="#portfolio" className="hover:text-[#20c997] transition">Portfolio</a>
          <a href="#contact" className="hover:text-[#20c997] transition">Contact</a>
        </nav>
      </aside>

      {/* ২. মেইন কন্টেন্ট এরিয়া (Margin Left দিয়ে সাইডবারের জায়গা ছাড়া হয়েছে) */}
      <div className="ml-72">
        
        {/* হিরো সেকশন */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* ব্যাকগ্রাউন্ড */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174')" }}
          >
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="relative z-10 text-center px-6 text-white">
            <h4 className="text-2xl font-light mb-4 tracking-widest uppercase text-gray-300">Welcome</h4>
            <h1 className="text-7xl font-bold mb-6 tracking-tight min-h-[90px]">
              I'm a{' '}
              <span className="text-white border-b-4 border-[#20c997]">
                <Typewriter
                  words={['Designer', 'Developer', 'Freelancer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg mx-auto font-light">
              based in Dinajpur, Bangladesh.
            </p>
            <button className="px-12 py-4 border-2 border-[#20c997] text-[#20c997] rounded-full hover:bg-[#20c997] hover:text-white transition-all duration-300 font-bold text-lg uppercase tracking-wider">
              Hire Me
            </button>
          </div>

          {/* ডাউনারো বাটন (ক্লিক করলে About এ যাবে) */}
          <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 text-white cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
            </svg>
          </a>
        </section>

        {/* ৩. এবাউট সেকশন (আলাদা ফাইল থেকে আসছে) */}
       <About></About>

        {/* ভবিষ্যতে এখানে আরও সেকশন যোগ করবেন */}
      </div>
    </div>
  );
};

export default App;