 import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-white text-[#111418] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক টাইটেল */}
        <div className="relative flex flex-col items-center justify-center mb-20">
          <h2 className="text-7xl md:text-9xl font-extrabold opacity-[0.03] uppercase tracking-widest absolute select-none text-center w-full">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold relative z-10 text-center">
            Know Me More
            <span className="block w-20 h-1 bg-[#20c997] mx-auto mt-3"></span>
          </h3>
        </div>

        {/* কন্টেন্ট গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* বাম পাশের বর্ণনা */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-5">
              I'm <span className="text-[#20c997]">Md. Sumon Islam ,</span> <br />
              A Web Developer
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
          "I am ready to add value to your project with fresh ideas and the latest technologies like React!
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              As a dedicated newcomer, my core strengths lie in mastering modern web technologies and a mindset for creating pixel-perfect User Interfaces (UI). I am looking for a partner who wants to leverage my skills to grow their business. I don’t just write code; I believe in delivering high-quality, responsive output within deadlines by deeply understanding your requirements.
            </p>
          </div>

          {/* ডান পাশের পার্সোনাল ইনফো */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <ul className="space-y-5">
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="font-bold text-gray-800">Name:</span> 
                <span className="text-gray-600">Md. Sumon Islam</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="font-bold text-gray-800">Email:</span> 
                <a href="mailto:me2sumanislam247@gmail.com" className="text-[#20c997] hover:underline">247@gmail.com</a>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="font-bold text-gray-800">Age:</span> 
                <span className="text-gray-600">26</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="font-bold text-gray-800">From:</span> 
                <span className="text-gray-600">Dinajpur, Bangladesh</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <button className="w-full bg-[#20c997] text-white py-4 rounded-full font-bold shadow-md hover:bg-[#1baa80] hover:shadow-lg transition-all duration-300 uppercase tracking-wider">
                Download CV
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;