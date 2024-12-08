// import React, { useState } from 'react';
// import { HiMenuAlt3 } from 'react-icons/hi';
// import logo from '../assets/images/logo.svg'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleCloseMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
//       <div className="container mx-auto flex justify-between items-center h-full">
//         {/* Logo */}
//         <div>
//           <a href="/">
//             <img src={logo} alt="logo" />
//           </a>
//         </div>

//         {/* Desktop nav items */}
//         <div className="hidden md:flex flex-grow justify-center">
//           <nav>
//             <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
//               <li>
//                 <a
//                   href="#home"
//                   className={`text-white ${activeSection === 'home' ? 'text-primary' : ''}`}
//                   onClick={() => setActiveSection('home')}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#service"
//                   className={`text-white ${activeSection === 'service' ? 'text-primary' : ''}`}
//                   onClick={() => setActiveSection('service')}
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#about"
//                   className={`text-white ${activeSection === 'about' ? 'text-primary' : ''}`}
//                   onClick={() => setActiveSection('about')}
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#pricing"
//                   className={`text-white ${activeSection === 'pricing' ? 'text-primary' : ''}`}
//                   onClick={() => setActiveSection('pricing')}
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#testimonial"
//                   className={`text-white ${activeSection === 'testimonial' ? 'text-primary' : ''}`}
//                   onClick={() => setActiveSection('testimonial')}
//                 >
//                   Testimonial
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Contact Us button (Desktop) */}
//         <div className="hidden md:block">
//           <a
//             href="#contact"
//             className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
//           >
//             Contact Us
//           </a>
//         </div>

//         {/* Menu button (Mobile) */}
//         <div className="block md:hidden">
//           <button
//             onClick={handleToggle}
//             className={`text-white focus:outline-none ${isOpen ? 'border border-white' : ''}`}
//           >
//             <HiMenuAlt3 className="text-2xl" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile nav items */}
//       {isOpen && (
//         <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
//           <ul className="flex flex-col p-4 space-y-3">
//             <li>
//               <a
//                 href="#home"
//                 className={`text-white ${activeSection === 'home' ? 'text-primary' : ''}`}
//                 onClick={() => {
//                   setActiveSection('home');
//                   handleCloseMenu();
//                 }}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#service"
//                 className={`text-white ${activeSection === 'service' ? 'text-primary' : ''}`}
//                 onClick={() => {
//                   setActiveSection('service');
//                   handleCloseMenu();
//                 }}
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className={`text-white ${activeSection === 'about' ? 'text-primary' : ''}`}
//                 onClick={() => {
//                   setActiveSection('about');
//                   handleCloseMenu();
//                 }}
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#pricing"
//                 className={`text-white ${activeSection === 'pricing' ? 'text-primary' : ''}`}
//                 onClick={() => {
//                   setActiveSection('pricing');
//                   handleCloseMenu();
//                 }}
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#testimonial"
//                 className={`text-white ${activeSection === 'testimonial' ? 'text-primary' : ''}`}
//                 onClick={() => {
//                   setActiveSection('testimonial');
//                   handleCloseMenu();
//                 }}
//               >
//                 Testimonial
//               </a>
//             </li>
//             <li className="py-2">
//               <a
//                 href="#contact"
//                 className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
//                 onClick={handleCloseMenu}
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleSetActiveSection = (section) => { // New function to handle setting active section
    setActiveSection(section);
    handleCloseMenu(); // Close menu after selecting a section on mobile
  };

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        {/* Desktop nav items */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>
            <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
              <li>
                <a
                  href="#home"
                  className={`${
                    activeSection === 'home' ? 'text-primary' : 'text-white' // Check if 'home' is active
                  } hover:text-primary`}
                  onClick={() => handleSetActiveSection('home')} // Set 'home' as active when clicked
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className={`${
                    activeSection === 'service' ? 'text-primary' : 'text-white' // Check if 'service' is active
                  } hover:text-primary`}
                  onClick={() => handleSetActiveSection('service')} // Set 'service' as active when clicked
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`${
                    activeSection === 'about' ? 'text-primary' : 'text-white' // Check if 'about' is active
                  } hover:text-primary`}
                  onClick={() => handleSetActiveSection('about')} // Set 'about' as active when clicked
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className={`${
                    activeSection === 'pricing' ? 'text-primary' : 'text-white' // Check if 'pricing' is active
                  } hover:text-primary`}
                  onClick={() => handleSetActiveSection('pricing')} // Set 'pricing' as active when clicked
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className={`${
                    activeSection === 'testimonial' ? 'text-primary' : 'text-white' // Check if 'testimonial' is active
                  } hover:text-primary`}
                  onClick={() => handleSetActiveSection('testimonial')} // Set 'testimonial' as active when clicked
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Us button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* Menu button (Mobile) */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${isOpen ? 'border border-white' : ''}`}
          >
            <HiMenuAlt3 className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile nav items */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <a
                href="#home"
                className={`${
                  activeSection === 'home' ? 'text-primary' : 'text-white' // Check if 'home' is active
                } hover:text-primary`}
                onClick={() => handleSetActiveSection('home')} // Set 'home' as active when clicked
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#service"
                className={`${
                  activeSection === 'service' ? 'text-primary' : 'text-white' // Check if 'service' is active
                } hover:text-primary`}
                onClick={() => handleSetActiveSection('service')} // Set 'service' as active when clicked
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`${
                  activeSection === 'about' ? 'text-primary' : 'text-white' // Check if 'about' is active
                } hover:text-primary`}
                onClick={() => handleSetActiveSection('about')} // Set 'about' as active when clicked
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className={`${
                  activeSection === 'pricing' ? 'text-primary' : 'text-white' // Check if 'pricing' is active
                } hover:text-primary`}
                onClick={() => handleSetActiveSection('pricing')} // Set 'pricing' as active when clicked
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className={`${
                  activeSection === 'testimonial' ? 'text-primary' : 'text-white' // Check if 'testimonial' is active
                } hover:text-primary`}
                onClick={() => handleSetActiveSection('testimonial')} // Set 'testimonial' as active when clicked
              >
                Testimonial
              </a>
            </li>
            <li className="py-2">
              <a
                href="#contact"
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                onClick={handleCloseMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
