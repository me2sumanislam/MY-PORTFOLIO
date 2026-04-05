 const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#111418] text-white fixed left-0 top-0 flex flex-col items-center py-10 border-r border-gray-800">
      {/* প্রোফাইল ইমেজ */}
      <div className="w-40 h-40 rounded-full border-8 border-[#343a40] overflow-hidden mb-4">
        <img 
          src="profile-link.jpg" 
          alt="Simone Olivia" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h2 className="text-xl font-bold mb-10">Md. Sumon </h2>

      {/* নেভিগেশন লিংকস */}
      <nav className="w-full text-center space-y-6">
        <a href="#home" className="block text-green-500">Home</a>
        <a href="#about" className="block hover:text-green-500 transition">About Me</a>
        <a href="#services" className="block hover:text-green-500 transition">What I Do</a>
        <a href="#resume" className="block hover:text-green-500 transition">Resume</a>
        <a href="#portfolio" className="block hover:text-green-500 transition">Portfolio</a>
        <a href="#contact" className="block hover:text-green-500 transition">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;