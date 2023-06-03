import React, { useState } from 'react';
import correct from '../../assets/correct.svg'
const Benefits = () => {


  const myStyle = {
    background:
      'linear-gradient(115.74deg, #FFFFFF 1.79%, rgba(20, 241, 217, 0.28) 28.39%, #FFFFFF 52.83%, rgba(54, 114, 248, 0.42) 77.49%, #FFFFFF 100%)',
  };

  return (
    <div style={myStyle}>
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-dark uppercase pt-20 pb-10 font-Roboto text-blue text-center">
        Why Choose Us?
      </h2>


      <div className="relative flex flex-col justify-center pb-20  overflow-hidden  ">

  <div className="relative  px-10  shadow-2xl bg-white bg-opacity-50 rounded-lg mx-auto">
    <div className="sm:w-[900px] w-[300px]  mx-auto">
      {/* <!-- content --> */}
      <div className="divide-y bg-opacity-75">
        <details className="group py-3"  open>
          <summary className=" uppercase font-Roboto  flex  cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900">
<div className='flex flex-row items-center gap-4'>
<img src={correct} alt="" />
Fast Delivery

</div>
            <div className="text-secondary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500 text-left">
          We understand the importance of providing a seamless experience for our clients, and that includes eliminating any extra costs associated with delivery. With our free delivery, clients can save valuable resources, allowing them to invest in other aspects of their business.
          Our commitment to exceptional service extends beyond the development process. By offering free delivery, we ensure that our clients receive their web-based products or services promptly and without any additional charges. This efficient and hassle-free delivery process enhances customer satisfaction and builds trust in our agency.
          </div>
        </details>
        <details className="group py-3">
          <summary className="text-left font-Roboto uppercase flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
    
          <div className='flex flex-row items-center gap-4'>
<img src={correct} alt="" />
        Free Hosting And Domain
    </div>
            <div className="text-secondary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500 text-left">
          With our free hosting and domain services, clients can save valuable resources and streamline their online presence. We provide reliable and secure hosting solutions, ensuring optimal performance and uninterrupted access to their websites. Our dedicated team handles all aspects of domain registration, taking the hassle out of the process and ensuring that clients can establish their online identity effortlessly.
            </div>
        </details>
        <details className="group py-3">
          <summary className="font-Roboto uppercase flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
          <div className='flex flex-row items-center gap-4'>
<img src={correct} alt="" />
            Best Prices
          </div>
            <div className="text-secondary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500 text-left">
          Our unbeatable prices are accompanied by a plethora of impressive features and benefits. From stunning website designs to robust functionality, our team of skilled developers delivers outstanding results at affordable rates. We employ innovative techniques and cutting-edge technologies to optimize efficiency and deliver cost-effective solutions tailored to our clients' unique needs.
          </div>
        </details>

        <details className="group py-3">
          <summary className="font-Roboto uppercase flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
          <div className='flex flex-row items-center gap-4'>
<img src={correct} alt="" />
            Best Experience
          </div>
          
            <div className="text-secondary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500 text-left">
          Our team of highly skilled and experienced professionals is dedicated to delivering exceptional results with meticulous attention to detail. We are committed to creating stunning, user-friendly websites that captivate audiences and leave a lasting impression. With our innovative approach and cutting-edge technologies, we ensure seamless navigation, fast loading times, and responsive design across all devices. Our customer-centric approach guarantees clear communication, prompt responses, and tailored solutions that exceed expectations. Trust us to bring your vision to life and provide an unparalleled web development experience that is engaging, immersive, and unforgettable.
            </div>
        </details>
      </div>
    </div>
  </div>

</div>
     
    </div>
  );
};

export default Benefits;
