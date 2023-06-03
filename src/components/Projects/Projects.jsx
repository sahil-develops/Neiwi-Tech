import React from 'react';

import servicesimg1 from '../../assets/servicesimg1.png'
import servicesimg2 from '../../assets/servicesimg2.png'
import servicesimg3 from '../../assets/servicesimg3.png'

const Projects = () => {
    const myStyle ={
        background: 'linear-gradient(115.74deg, #FFFFFF 1.79%, rgba(20, 241, 217, 0.28) 28.39%, #FFFFFF 52.83%, rgba(54, 114, 248, 0.42) 77.49%, #FFFFFF 100%)',
        borderRadius: '15px',
        color: '#205284',
        fontWeight:'bold',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat'
    }

  const array = [
    {
      image: servicesimg1,
      title: 'Website #1'
    },
    {
      image: servicesimg2,
      title: 'Website #2'
    },
    {
      image: servicesimg3,
      title: 'Website #3'
    },
    {
      image: servicesimg1,
      title: 'Website #4'
    },
    {
      image: servicesimg2,
      title: 'Website #5'
    },
    {
      image: servicesimg3,
      title: 'Website #6'
    },
  ];

  return (
    <div className='projects-container bg-white pt-8 pb-8'>
      <h1 className='text-uppercase font-bold text-blue md:text-[40px] text-4xl font-roboto mb-8 text-center pb-7 uppercase'>Projects We Have Built</h1>
      <div className="flex flex-wrap justify-center">
        {array.map((item, index) => (
          <div className="card mx-4 my-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg overflow-hidden" key={index}>
            <img src={item.image} alt={item.title} width={450} className="card-img-top" />
            <div className="card-body p-4">
            <div className='mt-8'>
                
                <p className="font-semibold text-xl text-dark mb-1 px-12 py-3" style={myStyle}>
                      {item.title}
                   </p>
             
                    </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
