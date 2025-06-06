import React, { useState} from "react";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import { MdOutgoingMail } from "react-icons/md";
import {cv} from '../assets';
import {FaCloudDownloadAlt } from 'react-icons/fa';
import { styles } from "../styles";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyGmailId = () => {
    const hiddenText = document.getElementById('myGmail');
    const textarea = document.createElement('textarea');
    textarea.value = hiddenText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  
  return (
   
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
           <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
           <div className="w-1 sm:h-90 h-80 violet-gradient" />
        </div>

        {isCopied && 
        <span className="text-white-100 w-full max-w-80 rounded flex place-self-center justify-center items-center p-3 fixed top-22 z-10 bg-gradient-to-r from-indigo-300">Email has been copied! </span>}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> Ali Akbar  <span className="text-[#915eff]"> Sazish </span> </h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            <span className="text-[#915eff] font-bold"> Full-stack developer </span> 
                with over <span className="text-[#915eff] font-bold"> 5 </span>
                 years of experience, proficient in both frontend and backend development. Skilled in<span className="text-[#915eff] font-bold"> JavaScript, TypeScript, React, as well as PHP and Laravel </span>
                for building robust, scalable web applications. Experienced in IT management, team leadership, and quickly adapting to new technologies. Passionate about delivering high-quality, user-friendly solutions.
                {/* <div className='black-gradient py-2 px-4 font-[12px] rounded-xl outline-none w-fit text-white shadow-md shadow-primary'> <a href={cv} download="Ali Akbar Sazish CV.pdf" target='_blank'>
             Download Reusme <FaCloudDownloadAlt className="inline" />
            </a> </div> */}
            </p>
            
                <span className="flex flex-row gap-2 mt-7">
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-teal-900" target="_blank" href="https://www.linkedin.com/in/ali-akbar-sazish/"> <FaLinkedinIn /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-teal-900" target="_blank" href="https://github.com/akbarsazish"> <FaGithub /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-teal-900" target="_blank" href="https://twitter.com/AliAkbarSazish1"> <FaTwitter /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-teal-900" target="_blank" href="https://www.facebook.com/profile.php?id=100008137806708"> <FaFacebook /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-teal-900" target="_blank" href="https://www.instagram.com/ali_sazish/"> <FaInstagram /> </a>
                      <span onClick={copyGmailId} className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-teal-900">
                        <span id="myGmail" className="hidden"> sazishaliakbar@gmail.com </span>
                        <MdOutgoingMail />
                      </span>
                  </span>
            
                <p className={`${styles.heroSubText} mt-6 text-white-100`}> Email:  <span className="text-[#915eff]"> sazishaliakbar@gmail.com </span> </p>
                <p className={`${styles.heroSubText} text-white-100`}> Phone:  <span className="text-[#915eff]"> +9100473242 </span> </p>
          
                <fieldset>
                  <legend><span> My Hobbies </span></legend>
                      <button className="pulse-button"> Reading  </button>
                      <button className="pulse-button"> Sport  </button>
                      <button className="pulse-button"> Music  </button>
                      <button className="pulse-button"> Traveling  </button>
              </fieldset>
        </div>
      </div>
    </section>
  )
}

export default Hero;
