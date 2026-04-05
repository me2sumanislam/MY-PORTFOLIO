 import React from 'react';

const MySkills = () => {
  const skills = [
    { name: 'Web Design', level: 65 },
    { name: 'React JS', level: 70 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Daisy', level: 60 },
    { name: 'JavaScript', level: 80 },
    { name: 'Tailwind', level: 99 },
  ];

  return (
    /* Resume id যোগ করা হয়েছে যাতে সাইডবার থেকে এখানে স্ক্রল করে আসে */
    <section id="resume" className="py-20 px-8 md:px-16 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-800 mb-12">My Skills</h2>
        
        {/* Skills Grid: ২ কলামের লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-700">{skill.name}</span>
                <span className="text-lg font-semibold text-slate-700">{skill.level}%</span>
              </div>
              
              {/* Progress Bar Background */}
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                {/* Active Progress (ছবির সেই গ্রিন কালার) */}
                <div 
                  className="bg-[#20c997] h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV Button: হুবহু ছবির মতো বর্ডার ও আইকন স্টাইল */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 px-10 py-4 border-2 border-slate-500 text-slate-600 rounded-full font-bold hover:bg-slate-500 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm cursor-pointer shadow-sm">
            Download CV
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MySkills;