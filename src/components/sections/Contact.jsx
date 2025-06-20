import user_info from "../../data/user_info.js";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="mt-16 pt-12 pb-12 px-6 lg:px-24 bg-orange-500 dark:bg-orange-500"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1">
        {/* Left Side: Image */}
        <div className="flex-1 ml-6 relative">
          {/* Background effect */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse shadow-lg"></div>
          
          <img
            src={user_info.emoji.footer}
            alt={user_info.emoji.footeralt}
            className="w-60 h-auto relative"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 mt-10">
          {/* =========== TITLE =========== */}
          <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-900">
            Let&apos;s Get in Touch:{" "}
            <span className="text-white">
              Ways to Connect with Me
            </span>
          </h4>

          {/* =========== DESCRIPTION =========== */}
          <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
            {user_info.contact.description}
          </p>

          <hr className="mt-5 w-82 border dark:border-zinc-800" />

          {/* =========== LINKS =========== */}
          <div className="mt-5 flex flex-wrap gap-6">
            {/* =========== EMAIL =========== */}
            <a
              href={`mailto:${user_info.socials.email}`}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-orange-500 hover:dark:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <MdEmail className="text-2xl" />      
            </a>

            {/* =========== GITHUB =========== */}
            <a
              href={user_info.socials.github}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-orange-500 hover:dark:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaGithub className="text-2xl" />
            </a>

            {/* =========== INSTAGRAM =========== */}
            <a
              href={user_info.socials.instagram}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-orange-500 hover:dark:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaInstagram className="text-2xl" />       
            </a>

            {/* =========== LINKEDIN =========== */}
            <a
              href={user_info.socials.linkedin}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-orange-500 hover:dark:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaLinkedin className="text-2xl" />      
            </a>


          </div> 
        </div>
      </div>
    </section>
  );
}

export default Contact;
