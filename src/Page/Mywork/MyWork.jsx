 import React, { useState, useEffect } from 'react';
import { 
  FaFacebookF, FaTwitter, FaGoogle, 
  FaInstagram, FaEnvelope, FaTimes, FaGlobe, FaCalendarAlt, FaBriefcase, FaCode, FaUser 
} from 'react-icons/fa';

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // JSON ডেটা ফেচ করা
  useEffect(() => {
    fetch('./projects.json') // public ফোল্ডারের পাথ
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#20c997]"></div>
      </div>
    );
  }

  return (
    <div id="portfolio" className="bg-white min-h-screen py-16 px-4 font-sans">
      {/* Background Heading Section */}
      <div className="relative text-center mb-16">
        <h2 className="text-7xl md:text-9xl font-extrabold text-gray-50 opacity-10 uppercase select-none">
          Portfolio
        </h2>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#212529]">My Work</h3>
          <div className="w-20 h-1 bg-[#20c997] mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-700" 
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
              <h4 className="text-white text-xl font-bold mb-1">{project.title}</h4>
              <p className="text-[#20c997] text-sm tracking-widest uppercase">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-red-500 text-2xl transition-colors z-20"
            >
              <FaTimes />
            </button>

            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#212529] mb-10">
                {selectedProject.title}
              </h2>

              <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-3/5">
                  <div className="rounded-xl overflow-hidden shadow-lg border">
                    <img src={selectedProject.img} alt="" className="w-full h-auto" />
                  </div>
                </div>

                <div className="lg:w-2/5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Project Info:</h4>
                    <p className="text-gray-600 mb-8 border-l-4 border-[#20c997] pl-4 italic text-sm">
                      Detailed information about the project goes here. This data is now coming from a JSON file!
                    </p>

                    <ul className="space-y-4 text-gray-700 text-sm">
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-2">
                        <FaUser className="text-[#20c997]" /> <strong>Client:</strong> {selectedProject.client}
                      </li>
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-2">
                        <FaCode className="text-[#20c997]" /> <strong>Tech:</strong> {selectedProject.tech}
                      </li>
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-2">
                        <FaBriefcase className="text-[#20c997]" /> <strong>Industry:</strong> {selectedProject.industry}
                      </li>
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-2">
                        <FaCalendarAlt className="text-[#20c997]" /> <strong>Date:</strong> {selectedProject.date}
                      </li>
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-2">
                        <FaGlobe className="text-[#20c997]" /> <strong>URL:</strong> 
                        <a href={`${selectedProject.url}`} target="_blank" rel="noreferrer" className="text-[#20c997] hover:underline uppercase text-[10px]">
                          {selectedProject.url}
                        </a>
                      </li>
                    </ul>
                  </div>

                 <div className="mt-10 pt-6 border-t flex items-center gap-5"> 
                    <span className="font-bold text-gray-800 uppercase text-xs">Share:</span>
                    <div className="flex gap-4 text-gray-400">
                      <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                      <FaTwitter className="hover:text-sky-400 cursor-pointer" />
                      <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                      <FaEnvelope className="hover:text-[#20c997] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        // </div>
      )}
    </div>
  );
};

export default MyWork;