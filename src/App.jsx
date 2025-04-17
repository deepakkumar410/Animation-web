import React from 'react';
import './App.css';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const InfinityDraw = () => {

  useGSAP(() => {
    // Animate SVG draw
    gsap.fromTo(".draw-path path",
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power3.inOut",
        onComplete: () => {
          // After SVG animation, show rest of content
          gsap.to(".fade-in-content", { opacity: 1, duration: 1 });
          gsap.from("#img1,#img2,#img-text1,#img-text2", {
            opacity: 0,
            scale: 0,
            duration: 0.9
          });
          gsap.from("#first-text",{
            y:-40,
            opacity:0,
            duration:1,
            scale:0
          });
          gsap.from("#text-2",{
            opacity:0,
            scale:0,
            duration:1,
           
          });
          gsap.from("#first-cercle",{
            x:-100,
            duration:1,
            opacity:0
          })
          gsap.from("#sec-cercle",{
            x:100,
            duration:1,
            opacity:0
          })
          gsap.from("#third-cercle",{
            x:-100,
            duration:1,
            opacity:0
          })
          gsap.from("#fourth-cercle",{
            x:100,
            duration:1,
            opacity:0
          })
          gsap.from("#five-cercle",{
            y:100,
            duration:1,
            opacity:0
          })
          gsap.from("#six-cercle",{
            y:100,
            duration:1,
            opacity:0
          })
        }
      }
    );
  });


  return (
    <div className='w-full h-[100%]  relative z-20  '>
      <svg
        width="100%"
        height="100vh"
        viewBox="50 10 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="draw-path"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="30%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3333FF" />
            <stop offset="25%" stopColor="#26BD4C" />
            <stop offset="50%" stopColor="#26BD4C" />
            <stop offset="75%" stopColor="#254299" />
            <stop offset="100%" stopColor="#3333FF" />
          </linearGradient>
        </defs>
        <g transform="scale(8,5) translate(1, 1)">
          <path
            d="M5.63636 16C2.90909 16 2 14 2 12C2 10 2.90909 8 5.63636 8C9.27273 8 14.7273 16 18.3636 16C21.0909 16 22 14 22 12C22 10 21.0909 8 18.3636 8C14.7273 8 9.27273 16 5.63636 16Z"

            stroke="url(#myGradient)"
            strokeWidth="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            // transform="scale(1, 1.5)" 
            transform="translate(0, -6) scale(1, 1.5)"
          />
        </g>
      </svg>
        <div className='fade-in-content opacity-0 transition-opacity duration-100'>
          
          <div id='first-text' className=' absolute text-center w-[80%] top-[80px] left-[190px]'>
            <h1 className='text-[40px] leading-[45px] font-[700]'><span className='text-[#62D84E] '>The AI platform </span><br />
              for business transformation</h1>
          </div>
          <div id='first-container' className='absolute  w-[70%] left-[15rem] top-[14.2rem]'>
            <div className='flex justify-between'>
              <div><img id='img1' className='relative left-[20px] top-[20px]' src="https://www.servicenow.com/content/dam/servicenow-assets/public/scripts/homepage-redesign/images/Home_Customers_No-Container.png" alt="" />
                <div id='img-text1' className='w-[40%] h-[35px] relative  top-[-35px] left-[110px] text-center border border-blue-500 bg-blue-900 rounded-[15px]'>
                  <p  className=' text-[20px] font-[500] self-center '>Employees</p>
                </div>
              </div>
              <div>
                <p id='text-2' className="text-[45px] text-center font-bold text-transparent relative top-[120px] left-[20px] leading-[50px]"
                  style={{
                    WebkitTextStroke: '1.8px white ',
                  }}>
                  <span className='text-[90px]'>AI</span> <br /> AGENTS
                </p>
              </div>
              <div><img id='img2' className=' relative top-[20px]' src="https://www.servicenow.com/content/dam/servicenow-assets/public/scripts/homepage-redesign/images/Home_Employees_No-Container.png" alt="" />
                <div id='img-text2' className='w-[40%] h-[35px] relative  top-[-35px] left-[100px] text-center border border-blue-500 bg-blue-900 rounded-[15px]'>
                  <p  className=' text-[20px] font-[500] self-center '>Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div id='all-cercle' className=' absolute top-[150px] left-[200px] w-[75%] h-[40vh] m-auto text-[20px]  text-center'>
            <div className='flex justify-between  '>
              <div id='first-cercle' className='relative left-[25px] top-[10px]'>
                <p>IT</p>
                <div className=' w-[60px] h-[60px] rounded-[50%] flex justify-center items-center bg-gray-400 '>
                  <div className='  border-[5px] border-white rounded-[50%] w-[40px] h-[40px] bg-white '></div>
                  </div>
              </div>
              <div  id='sec-cercle' className='relative  left-[5px]'>
                <p className='text-center'>CRM</p>
                <div className=' w-[60px] h-[60px] rounded-[50%] flex justify-center items-center bg-gray-400 '>
                  <div className=' border border-white rounded-[50%] w-[40px] h-[40px] bg-white'></div>
                </div>
              </div>
            </div>
            <div id='container-cercle2' className='flex justify-between pt-10'>
              <div  id='third-cercle' className=' relative right-[80px] top-[150px] left-[-50px]'>
                <div className=' w-[60px] h-[60px] rounded-[50%] flex justify-center relative left-[10px] items-center bg-gray-400 '>
                  <div className=' border border-white rounded-[50%] w-[40px] h-[40px]  bg-white'></div>
                </div>
                <p className='relative right-[25px]'>Security and Risk</p>
              </div>
              <div  id='fourth-cercle' className=' relative left-[120px] top-[120px]'>
                <div className=' w-[60px] h-[60px] rounded-[50%] flex justify-center items-center  relative left-[60px] bg-gray-400 '>
                  <div className=' border border-white rounded-[50%] w-[40px] h-[40px]  bg-white'></div>
                </div>
                <p>Finance and Supply</p>
              </div>
            </div>
            <div  id='container-cercle3' className='flex justify-between  pt-10'>
              <div  id='five-cercle' className=' relative left-[120px] top-[220px]'>
                <div className=' w-[60px] h-[60px] rounded-[50%] flex justify-center items-center bg-gray-400 relative left-[20px] top-[-10px] '>
                  <div className=' border border-white rounded-[50%] w-[40px] h-[40px] bg-white'></div>
                </div>
                <p className='relative top-[-10px]'>Human Resources</p>
              </div>
              <div  id='six-cercle' className=' relative  top-[210px]'>
                <div className=' w-[60px] h-[60px] rounded-[50%] flex justify-center items-center bg-gray-400 '>
                  <div className=' border border-white rounded-[50%] w-[40px] h-[40px] bg-white'></div>
                </div>
                <p className='relative right-[30px]'>App Development</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default InfinityDraw;
