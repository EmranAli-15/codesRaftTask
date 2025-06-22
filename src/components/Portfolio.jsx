import project from "../assets/project.png"
import { FaStar } from "react-icons/fa6";

import grow from "../assets/growGIF.gif"
import plan from "../assets/planningGIF.gif"
import strategy from "../assets/strategyGIF.gif"


export default function Portfolio() {
  return (
    <div className="py-8 px-2 md:px-0">

      {/* portfolio section */}
      <section>
        <p className="text-blue-500 font-bold text-center">PORTFOLIO</p>
        <h1 className="text-3xl font-bold text-center">Digital Product Showcases</h1>

        <div className="max-w-5xl mx-auto mt-3 flex justify-center flex-wrap gap-2">
          <button className="btn cmnBtn">All</button>
          <button className="btn cmnBtn !bg-transparent !text-gray-600">Landing Page</button>
          <button className="btn cmnBtn !bg-transparent !text-gray-600"> App Design</button>
          <button className="btn cmnBtn !bg-transparent !text-gray-600"> SasS Product</button>
          <button className="btn cmnBtn !bg-transparent !text-gray-600">Dashboard</button>
        </div>

        <div className="mt-8 grid md:grid-cols-3 justify-center gap-4">
          {
            Array(6).fill(null).map((item, index) => {
              return <div key={index}>
                <img src={project} alt="" />
                <h1 className="font-bold">E-Commerce</h1>
                <p className="text-gray-400">Lorem, ipsum.</p>
              </div>
            })
          }
        </div>
      </section>



      {/* process section */}
      <section className="w-screen -ml-[50vw] relative left-1/2 bg-slate-100 my-10 py-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-500 font-bold text-center">PROCESS</p>
          <h1 className="text-3xl font-bold text-center">My Working Process</h1>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex justify-center md:justify-start">
            <div className="flex items-center">
              <img className="w-[40%]" src={plan} alt="" />
              <div>
                <h1 className="font-bold text-center">Business Planning</h1>
                <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta quam cumque.</p>
              </div>
            </div>
          </div>


          <svg className="absolute left-[55%] top-[35%] hidden h-[150px] w-[580px] -translate-x-1/2 -translate-y-1/2 transform lg:block" fill="none" data-reveal="in-fade"><path d="M1 1c7.255 23.316 12.132 49.428 31.848 67.45 11.32 10.349 16.684 18.72 32.52 24.395 13.96 5.003 51.325 18.606 66.469 5.364 7.463-6.526 16.624-20.318 3.781-26.82-6.446-3.262-17.016-2.214-24.201-1.616-5.314.443-6.954 5.964-8.739 9.258-5.374 9.922-2.814 24.311 4.874 32.256 17.363 17.942 41.593 32.2 69.242 35.71 22.248 2.823 45.197 1.977 67.561 4.041 34.213 3.157 70.887 7.217 104.031 15.577 18.72 4.721 37.381 9.547 56.133 14.18 10.798 2.669 27.801 6.337 37.726 11.137C463.073 201.574 473.557 214.827 479 218" stroke="#AAD1B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 8 4 8"></path>
          </svg>

          <div className="flex justify-center my-10 md:my-0 md:justify-end">
            <div className="flex items-center flex-row-reverse">
              <img className="w-[40%]" src={strategy} alt="" />
              <div>
                <h1 className="font-bold text-center">Design Strategy</h1>
                <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta quam cumque.</p>
              </div>
            </div>
          </div>


          <svg className="absolute left-[70%] rotate-290 top-[42%] hidden h-[150px] w-[580px] -translate-x-1/2 -translate-y-1/2 transform lg:block" fill="none" data-reveal="in-fade"><path d="M1 1c7.255 23.316 12.132 49.428 31.848 67.45 11.32 10.349 16.684 18.72 32.52 24.395 13.96 5.003 51.325 18.606 66.469 5.364 7.463-6.526 16.624-20.318 3.781-26.82-6.446-3.262-17.016-2.214-24.201-1.616-5.314.443-6.954 5.964-8.739 9.258-5.374 9.922-2.814 24.311 4.874 32.256 17.363 17.942 41.593 32.2 69.242 35.71 22.248 2.823 45.197 1.977 67.561 4.041 34.213 3.157 70.887 7.217 104.031 15.577 18.72 4.721 37.381 9.547 56.133 14.18 10.798 2.669 27.801 6.337 37.726 11.137C463.073 201.574 473.557 214.827 479 218" stroke="#AAD1B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 8 4 8"></path>
          </svg>

          <div className="flex justify-center md:justify-start">
            <div className="flex items-center">
              <img className="w-[40%]" src={grow} alt="" />
              <div>
                <h1 className="font-bold text-center">Design Strategy</h1>
                <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta quam cumque.</p>
              </div>
            </div>
          </div>

        </div>

      </section>



      {/* testimonial section */}
      <section className="mt-10 py-8">

        <h1 className="font-bold text-center text-blue-500">TESTIMONIAL</h1>
        <h1 className="text-3xl font-bold text-center">What People Say's About Us</h1>

        <div className="overflow-auto scroll-x-auto">
          <div className="flex justify-evenly gap-4 mt-5 items-center">
            {
              Array(3).fill(null).map((card, index) => {
                return <div key={index}>
                  <div className="w-76 bg-slate-100 p-8 rounded-xl">
                    <div className="flex items-center gap-x-2">
                      <FaStar className="text-yellow-500">/</FaStar>
                      <FaStar className="text-yellow-500">/</FaStar>
                      <FaStar className="text-yellow-500">/</FaStar>
                      <FaStar className="text-yellow-500">/</FaStar>
                      <FaStar className="text-yellow-500">/</FaStar>
                    </div>
                    <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque aliquid voluptatum beatae qui! Debitis perferendis impedit temporibus quibusdam laborum?</p>
                    <div className="flex items-center gap-x-2">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                      </div>
                      <div>
                        <h1 className="font-bold">CodesRaft Dev</h1>
                        <p className="text-gray-500 text-sm">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </section>

    </div>
  )
}









