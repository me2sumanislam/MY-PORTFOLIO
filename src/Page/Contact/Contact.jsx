 import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaTwitter, 
  FaFacebookF, 
  FaGoogle, 
  FaGithub 
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // নিচে আপনার EmailJS আইডিগুলো বসান
    emailjs.sendForm(
      'service_39b5ivj',   // Email Services থেকে পাওয়া ID
      'template_uwdnwfw',  // Email Templates থেকে পাওয়া ID
      form.current, 
      '0SdMQDR5ErQUIaIiB'    // Account সেকশন থেকে পাওয়া Public Key
    )
    .then((result) => {
        console.log(result.text);
        alert("ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে। ✅");
        form.current.reset(); // ফর্ম খালি করার জন্য
    }, (error) => {
        console.log(error.text);
        alert("দুঃখিত, মেসেজটি পাঠানো যায়নি। আবার চেষ্টা করুন। ❌");
    });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-[#f8f9fa] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন টাইটেল (ওয়াটারমার্ক স্টাইল) */}
        <div className="relative flex flex-col items-center justify-center mb-20">
          <h2 className="text-7xl md:text-9xl font-extrabold opacity-[0.05] uppercase tracking-widest absolute select-none text-center w-full">
            Contact
          </h2>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
              Get in Touch
            </h3>
            <span className="block w-20 h-1 bg-[#20c997] mx-auto mt-3 rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* বাম পাশে - ঠিকানা ও সোশ্যাল লিংক */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Address</h4>
              <p className="text-gray-600 leading-relaxed">
                Dinajpur, Bangladesh.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <FaPhoneAlt className="text-[#20c997]" />
                <span>+880 1700 000000</span> {/* আপনার নম্বর দিন */}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FaEnvelope className="text-[#20c997]" />
                <a href="mailto:me2sumanislam247@gmail.com" className="hover:text-[#20c997] transition-colors">
                  me2sumanislam247@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-5 uppercase tracking-wide">Follow Me</h4>
              <div className="flex gap-5 text-gray-400">
                <a href="#" className="hover:text-[#20c997] transition-all"><FaGlobe size={20} /></a>
                <a href="#" className="hover:text-[#20c997] transition-all"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-[#20c997] transition-all"><FaFacebookF size={20} /></a>
                <a href="#" className="hover:text-[#20c997] transition-all"><FaGoogle size={20} /></a>
                <a href="#" className="hover:text-[#20c997] transition-all"><FaGithub size={20} /></a>
              </div>
            </div>
          </div>

          {/* ডান পাশে - কন্টাক্ট ফর্ম */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold text-slate-800 mb-8 uppercase tracking-wide">Send us a note</h4>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name" // আপনার EmailJS টেমপ্লেটের {{name}} এর সাথে মিল আছে
                  placeholder="Name" 
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#20c997] bg-white transition-all shadow-sm"
                />
                <input 
                  type="email" 
                  name="email" // আপনার EmailJS টেমপ্লেটের {{email}} এর সাথে মিল আছে
                  placeholder="Email" 
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#20c997] bg-white transition-all shadow-sm"
                />
              </div>
              
              <textarea 
                name="message" // আপনার EmailJS টেমপ্লেটের {{message}} এর সাথে মিল আছে
                rows="6" 
                placeholder="Tell us more about your needs........" 
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#20c997] bg-white transition-all shadow-sm resize-none"
              ></textarea>

              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="px-12 py-4 bg-[#20c997] text-white rounded-full font-bold shadow-lg shadow-green-100 hover:bg-[#1baa80] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;