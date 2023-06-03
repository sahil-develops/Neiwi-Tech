import React from 'react'
import servicesimg1 from '../../assets/servicesimg1.png'
import { Link } from 'react-router-dom'
const Services = () => {
    const myStyle ={
        background: 'linear-gradient(115.74deg, #FFFFFF 1.79%, rgba(20, 241, 217, 0.28) 28.39%, #FFFFFF 52.83%, rgba(54, 114, 248, 0.42) 77.49%, #FFFFFF 100%)',
        borderRadius: '15px',
        color: '#205284',
        fontWeight:'bold',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat'
    }
  return (
    <div>
      

      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               
               <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  font-Roboto
                  text-blue
                  "
                  >
SERVICES WE OFFER
               </h2>
               
            </div>
         </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white

               mb-8
               "
               >
               
            <img src={servicesimg1} alt="" />
               
            <div className='mt-8'>
                <Link to='/webdev'>
                <button className="font-semibold text-xl text-dark mb-3 px-12 py-5 focus:outline-none" style={myStyle}>
                      Webiste Development
                   </button>
             
                
                </Link>
                    </div> 
            
            </div>
         </div>
       
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white

               mb-8
               "
               >
               
            <img src={servicesimg1} alt="" />
               
            <div className='mt-8'>
                <Link to='/appdev'>
                
                <button className="font-semibold text-xl text-dark mb-3 px-12 py-5" style={myStyle}>
                      App Development
                   </button>
             
                </Link>
                    </div> 
              
            </div>
         </div>

         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white

               mb-8
               "
               >
               
            <img src={servicesimg1} alt="" />
              <div className='mt-8'>
              <Link to='/appdev'>
            <button className="font-semibold text-xl text-dark mb-3 px-5 py-5" style={myStyle}>
                  Digital Marketing
               </button>
         </Link>
                </div> 
            </div>
         </div>
      </div>
   </div>
</section>

    </div>
  )
}

export default Services