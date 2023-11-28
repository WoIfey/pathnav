function App() {
  return (
    <div className="font-montserrat">
      <div className="h-screen flex justify-center items-center">
        <div className="-z-10 absolute bg-[url('/ubc.svg')] h-screen w-full bg-no-repeat bg-cover blur-sm"></div>
        <div className="flex flex-col gap-2 justify-center items-center">
          {/* <h1 className="bg-custom bg-[#195E19] bg-clip-text text-transparent text-[10rem] font-bold">PATHNAV</h1> */}
          <ul className="absolute flex top-10 list-none bg-[#195E19] text-white p-2 rounded-full text-[22px]">
            <a href="#what">
              <li className="w-36 text-center cursor-pointer transition duration-150 hover:bg-[#458a45] rounded-full p-2 hover:text-white">
                What doin!
              </li>
            </a>
            <a href="#features">
              <li className="w-36 text-center cursor-pointer transition duration-150 hover:bg-[#458a45] rounded-full p-2 hover:text-white">
                Features!
              </li>
            </a>
          </ul>
          <img src="/logo.svg" alt="" className="lg:px-0 px-10" />
          <img src="/subhead.svg" alt="" className="lg:px-0 px-10" />
        </div>
      </div>
      <section id="what">
        <div className="h-screen flex justify-center items-center flex-col lg:flex-row">
          <div className="-z-10 absolute bg-[#102910] h-screen w-full bg-no-repeat bg-cover"></div>
          <div className="flex flex-col">
            <div>
              <h1 className="bg-custom bg-[#195E19] bg-clip-text text-transparent text-[2rem] lg:text-[7rem] font-bold mx-5 lg:mx-0">WHAT WE DO</h1>
              <p className="text-white max-w-2xl text-xl mx-5 lg:mx-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It</p>
            </div>
          </div>
          <img src="/business.png" alt="" className="w-full mt-5 lg:w-auto lg:rounded-xl lg:ml-10" />
        </div>
      </section>
      <section id="features">
        <div className="h-screen flex justify-center items-center flex-col lg:flex-row">
          <div className="-z-10 absolute bg-[#103210] h-screen w-full bg-no-repeat bg-cover"></div>
          <div className="">
            <h1 className="bg-custom bg-[#2c5f2c] bg-clip-text text-transparent text-[2rem] lg:text-[7rem] font-bold mx-5 lg:mx-0">FEATURE LIST</h1>
            <ul className="text-white list-disc max-w-2xl text-xl mx-10 lg:mx-0">
              <li>Provide Easy map layout</li>
              <li>Ability to Edit your own map</li>
              <li>Custom packages for your business</li>
              <li>Advanced directions</li>
              <li>Information for all rooms</li>
              <li>Full Website and app support</li>
              <li>Ability to see future events</li>
              <li>Other optional abilities</li>
            </ul>
          </div>
          <img src="/feature.png" alt="" className="w-full mt-5 lg:w-auto lg:rounded-xl lg:ml-10" />
        </div>
      </section>
    </div>
  )
}

export default App
