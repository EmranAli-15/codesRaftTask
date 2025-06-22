import world from "../assets/world.svg";

export default function Location() {
    return (
        <div className='w-screen -ml-[50vw] left-1/2 relative mt-10'>
            <div className="max-w-7xl mx-auto px-3 md:px-0">
                <h1 className="text-blue-500 font-bold text-center">OUR LOCATION</h1>
                <div className="md:flex justify-between mt-5">
                    <div className="md:w-1/2">
                        <img src={world} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-center">Dhaka, Bangladesh</h1>
                        <p className="text-gray-500 text-center py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ratione!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
