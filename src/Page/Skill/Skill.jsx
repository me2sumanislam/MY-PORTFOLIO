 import React from 'react';

const TechStack = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      desc: "Creating the structural backbone of web pages with semantic and accessible standards."
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      desc: "Styling modern web layouts with advanced CSS, Flexbox, Grid, and smooth animations."
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      desc: "Developing dynamic user experiences and complex logic using ES6+ and modern JS features."
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Building component-based, high-performance SPAs with efficient state management."
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      desc: "Crafting highly customizable and responsive user interfaces with utility-first CSS."
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      desc: "Optimizing web performance with server-side rendering and SEO-ready architecture."
    }
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section: Large Faint "SKILLS" Background */}
        <div className="relative flex flex-col items-center justify-center mb-24">
          <h2 className="text-[7rem] md:text-[12rem] font-extrabold text-slate-100 absolute tracking-tighter select-none uppercase leading-none">
            Skills
          </h2>
          <div className="relative z-10 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              What I Do?
            </h3>
            {/* DaisyUI Divider with Signature Green */}
            <div className="divider divider-accent w-20 mx-auto opacity-80 mt-1"></div>
          </div>
        </div>

        {/* Skills Grid: Clean 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 transition-all duration-300"
            >
              {/* Icon Container: Soft Shadow & Grayscale to Color Effect */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 rounded-2xl flex items-center justify-center p-4 group-hover:shadow-[0_15px_45px_rgba(32,201,151,0.15)] group-hover:-translate-y-1 transition-all duration-500">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold text-slate-800 group-hover:text-[#20c997] transition-colors duration-300">
                  {skill.name}
                </h4>
                <p className="text-slate-500 mt-2 leading-relaxed text-lg font-normal max-w-md">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;