// import React, { useState } from "react";
// import thumbnailImg from "../assets/images/video-thumbnail.webp";
// import { MdOutlinePlayArrow } from "react-icons/md";
// import { RxCross1 } from "react-icons/rx";
// import { FaArrowCircleRight } from "react-icons/fa";

// const About = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handleVideoPlay = () => {
//     setIsVideoPlaying(true);
//   };
//   const handleCloseVideo = () => {
//     setIsVideoPlaying(false);
//   };

//   return (
//     <div id="about" className=" bg-[#f7f8fc] pb-16 pt-20">
//       <div className="container mx-auto">
//         <div className=" py-12 px-4 md:w-4/5 mx-auto flex-col md:flex-row items-center gap-8">
//           {/* Left Side */}
//           <div className=" md:w-1/2  w-full mb-8 md:mb-0">
//             {!isVideoPlaying ? (
//               <div className=" relative">
//                 <img
//                   src={thumbnailImg}
//                   alt="video thumbnail"
//                   className=" w-full md:h-[446px] h-auto rounded-lg object-cover"
//                 />
//                 <button
//                   onClick={handleVideoPlay}
//                   className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
//                 >
//                   <MdOutlinePlayArrow className=" size-12 text-white" />
//                 </button>
//               </div>
//             ) : null}
//           </div>

//           {/* right aide */}
//           <div className=" md:w-1/2  w-full">
//             <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
//               Start Your Journey to Mental Wellness
//             </h1>
//             <p className="text-lg mb-12 md:pr-8">
//               We lower our stress levels, we get to know our pain, we connect
//               better, we improve our focus, and we're kinder to ourselves. Let
//               us walk you through the basics in our new mindful guide on how to
//               meditate.
//             </p>
//             <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
//               <a href="#contact" className="flex gap-1 items-center">
//                 <span>Get Started</span>
//                 <FaArrowCircleRight />
//               </a>
//             </button>
//           </div>
//         </div>

//         {isVideoPlaying && (
//           <div className=" fixed inset-8 bg-black bg-opacity-75 flex items-center justify-center z-50">
//             <div className=" relative w-full h-full flex items-center justify-center ">
//               <iframe
//                 width="560"
//                 height="315"
//                 src="https://www.youtube.com/embed/JCF7RnV06AA?si=bPGPo7kzVIIJUJ6u"
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerpolicy="strict-origin-when-cross-origin"
//                 allowfullscreen
//               ></iframe>
//               <button
//                 onClick={handleCloseVideo}
//                 className=" absolute top-4 right-4 text-white text-2xl cursor-pointer"
//               >
//                 <RxCross1 />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default About;



import React, { useState } from "react";
import thumbnailImg from "../assets/images/video-thumbnail.webp";
import { MdOutlinePlayArrow } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaArrowCircleRight } from "react-icons/fa";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbnailImg}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <MdOutlinePlayArrow className="text-white text-4xl" />
                </button>
              </div>
            ) : null}
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl capitalize font-secondary font-bold mb-4 md:w-3/5 leading-snug">
              INDIVISUAL CONSULT AND THERAPY
            </h1>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we're kinder to ourselves. Let
              us walk you through the basics in our new mindful guide on how to
              meditate.
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get Started</span>
                <FaArrowCircleRight />
              </a>
            </button>
          </div>
        </div>

        {isVideoPlaying && (
          <div className="fixed inset-8 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JCF7RnV06AA?si=bPGPo7kzVIIJUJ6u"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <RxCross1 />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
