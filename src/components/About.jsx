import man from "../assets/aboutMan.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import "../App.css"

export default function About() {
  return (
    <div className='w-screen -ml-[50vw] left-1/2 relative bg-slate-100'>

      <div className="py-10 px-3 md:px-0 max-w-7xl mx-auto md:flex">
        <section className="relative hidden md:block md:w-1/2">
          <svg width={350} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M60.3,-0.9C60.3,29.7,30.2,59.3,-1.2,59.3C-32.5,59.3,-65,29.7,-65,-0.9C-65,-31.5,-32.5,-62.9,-1.2,-62.9C30.2,-62.9,60.3,-31.5,60.3,-0.9Z" transform="translate(100 100)" />
          </svg>
          <div className="absolute left-10 bottom-10">
            <img className="w-[60%] imgTransform" src={man} alt="" />
          </div>
        </section>

        <section>

          <h1 className="text-blue-500 font-bold">ABOUT ME</h1>
          <h1 className="text-3xl font-bold">Designing Solutions, Not <br /> Just Visuals</h1>
          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet similique accusamus fugiat libero natus?</p>

          <div className="bg-blue-100 flex items-start gap-x-2 text-gray-500 p-2 rounded-md mt-5 mb-2">
            <IoArrowForwardCircleOutline color="#FF0066" size={25}></IoArrowForwardCircleOutline>
            <div>
              <p>5K+ Complete Project</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aliquam.</p>
            </div>
          </div>

          <div className="bg-blue-100 flex items-start gap-x-2 text-gray-500 p-2 rounded-md">
            <IoArrowForwardCircleOutline color="#FF0066" size={25}></IoArrowForwardCircleOutline>
            <div>
              <p>5K+ Complete Project</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aliquam.</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="btn cmnBtn mt-5">Download CV</button>
          </div>

        </section>
      </div>

    </div>
  )
}
