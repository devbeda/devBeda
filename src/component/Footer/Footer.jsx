import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="w-full h-auto grid grid-cols-2 text-start gap-x-16 gap-y-7 pl-6 pb-7 pt-7 sm:flex sm:justify-center sm:items-center md:p-8 bg-[#24292d] text-sm sm:text-base">
      <div className="flex text-[#ccc]  md:text-lg justify-start items-center gap-2  md:text-m ">
        <FontAwesomeIcon icon={faEnvelope} />
        <p className="hover:underline ">bedaprakash.049<br/>@gmail.com</p>
      </div>

      <div className="flex text-[#ccc] gap-2 md:text-lg justify-start items-center">
        <FontAwesomeIcon icon={faPhone} />
        <p className="hover:underline ">7978631242</p>
      </div>

      <div className="flex text-[#ccc] gap-2 md:text-lg justify-start items-center">
        <FontAwesomeIcon icon={faGithub} />
        <p className="hover:underline ">/devbeda</p>
      </div>

      <div className="flex text-[#ccc] gap-2 md:text-lg justify-start items-center">
        <FontAwesomeIcon icon={faLinkedin} />
        <p className="hover:underline ">/beda-prakash1010</p>
      </div>
    </footer>
  )
}

export default Footer