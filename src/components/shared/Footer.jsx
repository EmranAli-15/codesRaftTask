
export default function Footer() {
  return (
    <div className="w-screen -ml-[50vw] left-1/2 relative bg-slate-100 mt-10 py-10">

      <div className="max-w-7xl mx-auto px-3 md:px-0">
        <div className="md:flex justify-between">

          <section className="md:w-1/2">
            <h1 className="text-blue-500 font-bold">SUBSCRIBE</h1>
            <h1 className="text-3xl font-bold">Subscribe To Get Latest Update From Us</h1>
          </section>

          <section className="md:w-1/2">
            <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae id alias! Facere rerum possimus saepe necessitatibus a voluptates delectus.</p>

            <div className="flex items-center">
              <input className="w-full outline-0 border border-[#FF0066] bg-white h-10 rounded-l-md px-3" type="text" placeholder="enter your email" />
              <button className="btn cmnBtn !rounded-l-none">
                Subscribe
              </button>
            </div>
          </section>

        </div>

        <div className="md:flex justify-between mt-2">
          <section className="md:w-1/2">
            <h1 className="text-[#FF0066] text-2xl font-bold">Brand</h1>
          </section>
          <section className="flex md:w-1/2 items-center justify-between gap-x-3 text-gray-500">
            <li className="list-none">Home</li>
            <li className="list-none">About</li>
            <li className="list-none">Services</li>
            <li className="list-none">Portfolio</li>
            <li className="list-none">Contact</li>
          </section>
        </div>
      </div>

    </div>
  )
}
