import React from 'react'
import webdevImage from '../../assets/WebdevImage.jpg'
import Pricing from '../Pricing/Pricing'
const SocialMedia = () => {
  return (
    <div className='mt-5'>
      <section class="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
    <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        {/* <!-- Blog post --> */}
        <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a class="relative block group" href="#0">
                <div class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
              
                    <img class="relative inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out z-[1]" src={webdevImage} width="540" height="303" alt="Blog post"/>

            </a>
            <div>
                <header>
                    <div class="mb-3">
                        <ul class="flex flex-wrap text-xs font-medium -m-1">
                            <li class="m-1">
                                <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                            </li>
                            <li class="m-1">
                                <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                            </li>
                        </ul>
                    </div>
                    <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 flex justify-start">
                        <a class="hover:text-gray-100 transition duration-150 ease-in-out " href="#0">Social Media Management.</a>
                    </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow text-left">
                Social media management offers significant advantages for growing or initial stage businesses. Firstly, it allows businesses to build an online presence and engage with their target audience on popular platforms. Social media management enables businesses to create brand awareness, attract potential customers, and drive website traffic. It offers a cost-effective marketing channel, allowing businesses to reach a wide audience with targeted advertising. Social media also facilitates customer feedback, reviews, and word-of-mouth marketing, which can boost brand credibility and loyalty. Furthermore, social media management provides valuable analytics and insights, helping businesses refine their strategies and optimize their online presence.
                </p>
                <footer class="flex items-center mt-4">
                    <a href="#0">
                        <img class="rounded-full flex-shrink-0 mr-4" src="https://preview.cruip.com/open-pro/images/news-author-04.jpg" width="40" height="40" alt="Author 04"/>
                    </a>
                    <div>
                        <a class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Sahil Zambani</a>
                        <span class="text-gray-700"> - </span>
                        <span class="text-gray-500">June 2,2023 </span>
                    </div>
                </footer>
            </div>
        </article>    
    </div>
</section>

{/* <!-- More components --> */}
<div x-show="open" class="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
    <div class="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
        <div>👉 <a class="hover:underline ml-1" href="" target="_blank">Message Now for Free Consultation</a></div>
        <button class="text-gray-500 hover:text-gray-400 ml-5" >
            <span class="sr-only">Close</span>
            <svg class="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
        </button>
    </div>
</div>
<Pricing/>
    </div>
  )
}

export default SocialMedia