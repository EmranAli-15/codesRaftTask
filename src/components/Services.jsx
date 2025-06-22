import { LuCircuitBoard } from "react-icons/lu";
import { VscServerProcess } from "react-icons/vsc";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { LiaSitemapSolid } from "react-icons/lia";


export default function Services() {
  return (
    <div className='mt-10 px-3 md:px-0'>
      <h1 className='text-center font-bold text-blue-400'>SERVICES</h1>

      <section>
        <h1 className='text-center font-bold text-3xl md:text-4xl'>Expertise Service! Let's check it out</h1>
        <p className="text-center max-w-4xl mx-auto mt-2 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse tenetur, tempore cupiditate maxime ipsa repellat vel totam recusandae explicabo?</p>
      </section>

      <section className="grid md:grid-cols-4 justify-center mt-5 gap-y-3">

        <div className="bg-slate-100 hover:bg-blue-400 group rounded-md p-4 w-full md:w-72 h-64">
          <div className="flex text-blue-400 group-hover:text-white justify-center mt-5">
            <LuCircuitBoard size={50}></LuCircuitBoard>
          </div>
          <h1 className="text-xl font-bold text-center group-hover:text-white mt-5">UI UX Design</h1>
          <p className="text-gray-500 text-center group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nostrum?</p>
        </div>
        <div className="bg-slate-100 hover:bg-blue-400 group rounded-md p-4 w-full md:w-72 h-64">
          <div className="flex text-blue-400 group-hover:text-white justify-center mt-5">
            <VscServerProcess size={50}></VscServerProcess>
          </div>
          <h1 className="text-xl font-bold text-center group-hover:text-white mt-5">Webflow Develop</h1>
          <p className="text-gray-500 text-center group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nostrum?</p>
        </div>
        <div className="bg-slate-100 hover:bg-blue-400 group rounded-md p-4 w-full md:w-72 h-64">
          <div className="flex text-blue-400 group-hover:text-white justify-center mt-5">
            <SiInteractiondesignfoundation size={50}></SiInteractiondesignfoundation>
          </div>
          <h1 className="text-xl font-bold text-center group-hover:text-white mt-5">Product Design</h1>
          <p className="text-gray-500 text-center group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nostrum?</p>
        </div>
        <div className="bg-slate-100 hover:bg-blue-400 group rounded-md p-4 w-full md:w-72 h-64">
          <div className="flex text-blue-400 group-hover:text-white justify-center mt-5">
            <LiaSitemapSolid size={50}></LiaSitemapSolid>
          </div>
          <h1 className="text-xl font-bold text-center group-hover:text-white mt-5">Final Product</h1>
          <p className="text-gray-500 text-center group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nostrum?</p>
        </div>

      </section>

    </div>
  )
}
