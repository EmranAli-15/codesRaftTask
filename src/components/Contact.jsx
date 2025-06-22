import man from "../assets/man.png"


export default function Contact() {
  return (
    <div className='w-screen -ml-[50vw] left-1/2 relative bg-slate-100 pt-10'>

      <div className="max-w-7xl mx-auto md:flex items-center justify-evenly px-3 md:px-0">

        <div className="py-10 md:w-1/2">
          <h1 className="text-3xl font-bold">Get A Project! Let's Talk</h1>
          <p className="text-gray-500 my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sapiente omnis temporibus? Nihil porro tempora libero earum numquam laudantium odit?</p>

          <div className="flex justify-center md:justify-start"><button className="btn cmnBtn mt-3">Contact</button></div>
        </div>

        <div>
          <img src={man} alt="" />
        </div>
      </div>

    </div>
  )
}
