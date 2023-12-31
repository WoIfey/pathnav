import { useState, useRef } from "react"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [enteredCode, setEnteredCode] = useState("")
  const [typing, setTyping] = useState(false)
  const [error, setError] = useState(false)
  const whatRef = useRef(null)
  const featuresRef = useRef(null)
  const contactRef = useRef(null)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const smoothScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  const code = (e) => {
    const code = e.target.value.toUpperCase()
    setEnteredCode(code)
    setTyping(true)

    setTimeout(() => {
      if (code === 'TIMS') {
        setSuccess(true)
        setError(false)
      } else {
        setSuccess(false)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000)
      }
    }, 500)
  }

  return (
    <div className="font-montserrat">
      <div className="h-dvh flex justify-center items-center">
        <div className="-z-10 absolute bg-[url('/ubc.svg')] h-dvh w-full bg-no-repeat bg-cover blur-sm"></div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <ul className="absolute shadow-xl flex top-12 list-none bg-[#195E19] text-white p-2 rounded-full text-[14px] md:text-[18px]">
            <button onClick={() => smoothScroll(whatRef)}>
              <li className="hidden sm:block w-28 md:w-32 text-center transition duration-150 hover:bg-[#458a45] rounded-full p-2 hover:text-white">
                What we do
              </li>
            </button>
            <button onClick={() => smoothScroll(featuresRef)}>
              <li className="w-28 md:w-32 text-center transition duration-150 hover:bg-[#458a45] rounded-full p-2 hover:text-white" >
                Features
              </li>
            </button>
            <button onClick={() => smoothScroll(contactRef)}>
              <li className="w-28 md:w-32 text-center transition duration-150 hover:bg-[#458a45] rounded-full p-2 hover:text-white" >
                Contact us
              </li>
            </button>
          </ul>
          <img src="/logo.svg" alt="" className="lg:px-0 px-10" />
          <img src="/subhead.svg" alt="" className="lg:px-0 px-10" />
          <div className="sm:hidden block">
            <button className="m-2 animate-glow rounded-full" onClick={() => smoothScroll(whatRef)}>
              <img
                src="arrow-down.svg"
                alt="down"
                className="bg-[#2ac42a] shadow-2xl rounded-full p-2 w-12 h-12"
              />
            </button>
          </div>
        </div>
      </div>
      <section id="what" ref={whatRef}>
        <div className="h-auto lg:h-dvh flex justify-center items-center flex-col lg:flex-row">
          <div className="-z-20 absolute bg-[url('/business.png')] blur-xl opacity-70 h-full w-full bg-no-repeat bg-cover"></div>
          <div className="flex flex-col">
            <div className="bg-[#000000d9] lg:py-6 p-6 rounded-none lg:rounded-xl">
              <div className="flex justify-center items-center">
                <h1 className="bg-custom bg-[#195E19] bg-clip-text text-transparent text-[1.5rem] lg:text-[4rem] font-bold mx-5 lg:mx-0">WHAT WE DO</h1>
              </div>
              <p className={`text-white max-w-2xl text-sm lg:text-xl mx-3 lg:mx-0 rounded ${showMore ? '' : 'max-h-36 overflow-hidden'}`}>
                Our mission is to deliver a sophisticated Mapping Navigation System designed for both public use and internal utilization by students and staff, depending on your preferences.
                <br /><br /><span className={`${showMore ? '' : 'blur-[2px]'}`}>
                  PathNav empowers you </span><span className={`${showMore ? '' : 'blur-[2px]'}`}>to personalize and construct your own</span> <span className={`${showMore ? '' : 'blur-sm'}`}>map, enabling the public to effortlessly locate destinations and receive guided instructions on reaching specific points of interest.</span>
                <br /><br /><span className={`${showMore ? '' : 'blur-sm'}`}>Our commitment extends to equipping you with the necessary tools for achieving this customization. Moreover, we offer the option of collaborating with you to develop a tailored map that aligns precisely with your organizational needs, ensuring it becomes an invaluable asset at your disposal.
                </span></p>
              <div className="flex justify-center items-center lg:justify-start">
                {showMore || (
                  <button className="px-5 py-2 text-xl rounded border bg-white outline-0 ring-emerald-100 ring-0 focus:border-[#2c5f2c] focus:ring-2 mt-4 lg:text-3xl" onClick={toggleShowMore}>
                    Show More
                  </button>
                )}
              </div>
            </div>
          </div>
          <img src="/business.png" alt="" className="w-full md:w-auto lg:rounded-xl lg:ml-10 max-[1280px]:hidden" />
        </div>
      </section>
      <section id="features">
        <div className="h-auto lg:h-dvh flex lg:justify-center items-center flex-col lg:flex-row">
          <div className="-z-10 absolute bg-[#0D440C] h-dvh w-full bg-no-repeat bg-cover"></div>
          <div className="bg-[#000000d9] lg:py-6 p-10 rounded-none lg:rounded-xl w-full lg:w-auto">
            <div className="flex justify-center items-center">
              <h1 className="bg-custom bg-[#2c5f2c] bg-clip-text text-transparent text-[1.5rem] lg:text-[4rem] font-bold mx-5 lg:mx-0">FEATURE LIST</h1>
            </div>
            <ul className="text-white list-disc max-w-2xl text-sm lg:text-xl mx-4 lg:mx-0">
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
          <img src="/features.png" alt="features" className="w-3/4 lg:w-auto md:w-1/2 lg:h-1/2 xl:h-auto xl:rounded-xl p-4 xl:p-0 xl:ml-10" />
        </div>
      </section>
      <section id="contact">
        <div className="h-auto lg:h-dvh flex justify-center items-center flex-col lg:flex-row">
          <div className="-z-10 absolute bg-[#899F85] h-auto lg:h-full w-full bg-no-repeat bg-cover"></div>
          <div className="bg-[#000000] lg:py-6 p-6 rounded-none lg:rounded-xl w-full lg:w-auto">
            <div className="flex justify-center items-center">
              <h1 className="bg-custom bg-[#2c5f2c] bg-clip-text text-transparent text-[1.5rem] lg:text-[4rem] font-bold mx-5 lg:mx-0">GET IN CONTACT!</h1>
            </div>
            <div className="text-white text-sm lg:text-xl flex justify-center w-full">
              <p>We got three different packages with</p>
            </div>
            <div className="text-white text-sm lg:text-xl flex gap-5 justify-center items-center lg:justify-around w-full mt-3 xl:flex-row flex-col text-center">
              <div className="max-w-lg">
                <p className="text-gray-400">Basic Access</p>
                <p className="mt-2">Includes website/app access (Fully Customized) Add buildings and rooms manually Cheapest Plan</p>
                <p className="mt-2 font-bold">1000$</p>
              </div>
              <div className="max-w-lg">
                <p className="text-amber-600">Fully Functional</p>
                <p className="mt-2">Includes website/app access (Fully Customized) Our engineers will map the whole location (Scheduled and time estimate) Ability to add buildings and rooms manually Basic Plan</p>
                <p className="mt-2 font-bold">5000$/1000m<sup>2</sup></p>
              </div>
              <div className="max-w-lg">
                <p className="text-yellow-500">Fully Functional + Regular updates</p>
                <p className="mt-2">Includes website/app access (Fully Customized) Our engineers will map the whole location (Scheduled and time estimate) Ability to add buildings and rooms manually Semi-Yearly Service Basic Plan</p>
                <p className="mt-2 font-bold">8000$/1500m<sup>2</sup></p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-5 py-2 text-xl rounded border bg-white outline-0 ring-emerald-100 ring-0 focus:border-[#2c5f2c] focus:ring-2 mt-4 lg:text-3xl" onClick={openModal}>Contact us!</button>
            </div>

            {showModal && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-dvh pt-4 px-4 pb-20 text-center sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={closeModal}
                  >
                    <div className="absolute inset-0 bg-[#000] opacity-95"></div>
                  </div>
                  <div
                    className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="bg-white p-4">
                      <h2 className="text-2xl font-bold">Secret Code!</h2>
                      <p className="mb-3">Did you see the letters?</p>
                      <input type="text" autoFocus={true} maxLength={4} value={enteredCode} onChange={(e) => { code(e) }} className="max-w-[100px] uppercase px-2 py-1 text-2xl rounded border-2 bg-white outline-0 ring-emerald-100 ring-0 focus:border-[#2c5f2c] focus:ring-2" />
                      {typing && error && (
                        <p className="text-red-600 mt-2">Not quite right!</p>
                      )}
                      {typing && success && (
                        <div>
                          <p className="text-green-700 mt-6 text-center">Show this for a free tims bit!</p>
                          <img src="/bits.png" alt="bits!" className="w-72" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
      <footer className="bg-[#0d270e] text-white py-4 text-center flex justify-center items-center flex-col">
        <img src="/logo.svg" alt="logo" className="w-20 my-1" />
        <p>© 2023 PathNav</p>
      </footer>
    </div>
  )
}

export default App
