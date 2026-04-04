 const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white">
      {/* ব্যাকগ্রাউন্ড ইমেজ ও ওভারলে */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('background-image-link.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* কালো আবছা আবরণ */}
      </div>

      {/* কন্টেন্ট */}
      <div className="relative z-10 text-center">
        <h3 className="text-2xl mb-4">Welcome</h3>
        <h1 className="text-6xl font-bold mb-6">
          I'm a <span className="border-r-4 border-white pr-2">Designer</span>
        </h1>
        <p className="text-xl mb-8">based in Los Angeles, California.</p>
        
        <button className="px-10 py-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition duration-300 font-semibold">
          Hire Me
        </button>
      </div>

      {/* নিচে যাওয়ার অ্যারো */}
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;