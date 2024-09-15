import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"

const links = [
  { to: "/", label: "Home" },
  { to: "aboutme", label: "About me" },
  { to: "projects", label: "Projects" },
  { to: "github", label: "Github Profile" },
];

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(prevState => !prevState);

  return (
    <nav className="w-full h-auto z-50 bg-[#24292d] fixed">
      <div className="w-full flex items-center justify-between px-8 py-4 text-white">
        <div>
          <h3 className="font-bold text-xl font-[AnonymousPro] md:mb-0">
            .devBeda
          </h3>
        </div>

        <ul className="hidden md:flex gap-4 text-lg font-semibold">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-white" : "text-gray-500"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-xl md:hidden" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {isMenuOpen && (
          <motion.div
          initial={{opacity: 0,x:300}}
          animate={{opacity: 1,x:0}}
          transition={{duration:0.5}}
          
          className="absolute w-56 h-screen bg-[#24292d] top-0 right-0">
            <div
              className="text-white text-xl text-right absolute right-4 top-4 cursor-pointer"
              onClick={handleMenuToggle}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="w-full h-full text-xl flex flex-col justify-center items-center gap-8 text-white">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  onClick={handleMenuToggle}
                  to={to}
                  className={({ isActive }) =>
                    `duration-200 ${isActive ? "text-white" : "text-gray-500"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Header;
