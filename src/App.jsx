 import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // লাইব্রেরিটি ইম্পোর্ট করুন

const App = () => {
  return (
    <div className="flex bg-[#111418] min-h-screen text-white font-sans">
      
      {/* ১. সাইডবার (আগের কোডেই থাকবে, সংক্ষেপে দেওয়া হলো) */}
      <aside className="w-72 h-screen fixed left-0 top-0 bg-[#111418] border-r border-gray-800 flex flex-col items-center py-12 z-50">
        <div className="w-44 h-44 rounded-full border-[8px] border-[#343a40] overflow-hidden mb-6">
          <img 
            src="https://via.placeholder.com/150" // নিজের ছবি দিন
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-12 tracking-wide">Simone Olivia</h2>
        <nav className="flex flex-col space-y-6 text-center w-full text-gray-400 font-medium">
          <a href="#" className="text-[#20c997]">Home</a>
          <a href="#" className="hover:text-[#20c997]">About Me</a>
          <a href="#" className="hover:text-[#20c997]">What I Do</a>
          <a href="#" className="hover:text-[#20c997]">Resume</a>
          <a href="#" className="hover:text-[#20c997]">Portfolio</a>
          <a href="#" className="hover:text-[#20c997]">Contact</a>
        </nav>
      </aside>

      {/* ২. মেইন কন্টেন্ট (যেখানে টাইপরাইটার যোগ হবে) */}
      <main className="ml-72 flex-1 relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* ব্যাকগ্রাউন্ড ও ওভারলে (আগের কোড) */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174')" }}
        >
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* কন্টেন্ট (যেখানে পরিবর্তন হবে) */}
        <div className="relative z-10 text-center px-6">
          <h4 className="text-2xl font-light mb-4 tracking-widest uppercase text-gray-300">Welcome</h4>
          
          {/* এই হেডিংটি আপডেট করা হয়েছে */}
          <h1 className="text-7xl font-bold mb-6 tracking-tight min-h-[90px]">
            I'm a{' '}
            <span className="text-white">
              {/* Typewriter কম্পোনেন্ট ব্যবহার করা হয়েছে */}
              <Typewriter
                words={['Designer', 'Developer', 'Freelancer', 'Creative Thinker']} // আপনার নির্দিষ্ট টেক্সটগুলো এখানে দিন
                loop={0} // 0 মানে অনবরত চলতে থাকবে
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-lg mx-auto font-light">
            based in Los Angeles, California.
          </p>
          
          <button className="px-12 py-4 border-2 border-[#20c997] text-[#20c997] rounded-full hover:bg-[#20c997] hover:text-white transition-all duration-300 font-bold text-lg uppercase tracking-wider">
            Hire Me
          </button>
        </div>

        {/* নিচের দিকে অ্যারো (আগের কোড) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
          </svg>
        </div>
      </main>

    </div>
  );
};

export default App;