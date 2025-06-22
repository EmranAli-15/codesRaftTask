import man from '../assets/man.png'

export default function Banner() {
    return (
        <div className="w-screen -ml-[50vw] left-1/2 relative bg-blue-400 pt-10">
            <div className="max-w-7xl mx-auto px-3 md:px-0">
                <div className="md:flex justify-between">
                    <section className="text-white md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold">Hello, I'm <br /> Emran Ali An <br /> Full Stack Developer</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cumque voluptates. Temporibus est alias iusto, omnis cupiditate deserunt voluptas odio!</p>


                        <div className='mt-7 flex items-center gap-x-5'>
                            <button className="btn cmnBtn">Get Started</button>
                            <button className="btn cmnBtn !bg-transparent">Go On</button>
                        </div>
                    </section>
                    <section className='relative'>
                        <div>
                            <svg className='w-[300px] md:w-[500px]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF0066" d="M48,-70.5C60.9,-66.3,69.2,-50.9,73.4,-35.4C77.6,-19.9,77.7,-4.3,72.2,8C66.7,20.3,55.6,29.4,46.6,41C37.6,52.6,30.6,66.7,18.8,75.2C7,83.7,-9.7,86.7,-21.3,79.9C-32.9,73.1,-39.5,56.5,-45.6,43.1C-51.7,29.6,-57.3,19.3,-62.5,6.8C-67.7,-5.7,-72.5,-20.5,-68.2,-31.6C-63.8,-42.6,-50.3,-50,-37.4,-54.2C-24.6,-58.3,-12.3,-59.3,2.6,-63.4C17.5,-67.5,35.1,-74.7,48,-70.5Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                        <div className='absolute bottom-0'>
                            <img className='w-[70%] md:w-full' src={man} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
