 import React from 'react';

const Sidebar = () => {
  // স্ক্রল করার জন্য ফাংশন (যাতে ID ধরে নির্দিষ্ট সেকশনে নিয়ে যায়)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-64 h-screen bg-[#111418] text-white fixed left-0 top-0 flex flex-col items-center py-10 border-r border-gray-800 z-50">
      {/* প্রোফাইল ইমেজ */}
      <div className="w-40 h-40 rounded-full border-8 border-[#343a40] overflow-hidden mb-4">
        <img 
          src="your-profile-image.jpg" 
          alt="Md. Sumon" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h2 className="text-xl font-bold mb-10 tracking-tight">Md. Sumon</h2>

      {/* নেভিগেশন লিংকস */}
      <nav className="w-full text-center space-y-6">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block hover:text-[#20c997] transition">Home</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block hover:text-[#20c997] transition">About Me</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block hover:text-[#20c997] transition">What I Do</a>
        <a href="#resume" onClick={(e) => scrollToSection(e, 'resume')} className="block hover:text-[#20c997] transition">Resume</a>
        
        {/* Portfolio লিঙ্কে ক্লিক করলে MyWork এ যাবে */}
        <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="block text-[#20c997] font-semibold transition">Portfolio</a>
        
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block hover:text-[#20c997] transition">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;