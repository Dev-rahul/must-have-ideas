import { useState } from 'react'
import LandingPage from './LandingPage'
import mainLogo from'./assets/images/0E3A1911.png';
import carImg from './assets/images/0E3A1885.JPG';
import carpetImg from './assets/images/1W4A8217_blue.jpg';
import logo from './/assets/images/made-up-brush-logo.png';
function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="bg-gray-100  flex flex-col items-center justify-center p-6">
      <div className="w-full bg-white shadow-lg rounded-2xl p-8 text-center">

      <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="border-12 border-[#001b51] rounded-2xl mx-[240px]  w-full bg-white relative overflow-visible">
        {/* Main Image */}
        <div className="relative  overflow-hidden">
          <img
            src={mainLogo}
            alt="Brush cleaning wooden floor"
            className="w-[1507px] h-[821px] "
          />
          <h1 className="absolute top-4 left p-2 rounded-md">
          <img
            src={logo}
            alt="Made Up Brush Logo"
            className="w-[620.6px]"
          />
          </h1>
          
          {/* Small Circular Images inside Main Image */}
          <div className="absolute top-4 right-4 flex flex-col space-y-4">
            <img
              src={carImg}
              alt="Cleaning car"
              className="w-[328px] h-[328px] rounded-full border-[10px] border-[#001b51]"
            />
            <img
              src={carpetImg}
              alt="Cleaning carpet"
              className="w-[328px] h-[328px] rounded-full border-[10px] border-[#001b51]"
            />
          </div>
        </div>

        {/* Footer Text Centered on Bottom Border, Fully Visible */}
        <div className="absolute bottom-[-5rem] left-1/2 transform -translate-x-1/2 bg-[#001b51] text-white text-center text-[82.7px]  p-3 rounded-full w-[1206.5px]">
          THE BRUSH THAT DOES IT <span className="text-white font-bold">ALL!</span>
        </div>
      </div>
    </div>



    
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          THE BRUSH THAT DOES IT ALL!
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Introducing Made Up Brush
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Tackle wet AND dry messes effortlessly with the revolutionary rubber broom that cleans anything, anywhere – indoors AND out.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Its <span className="font-semibold">584 rubber fingers</span> form an <span className="font-semibold">IMPENETRABLE wall</span> while creating a static charge that attracts dirt like a magnet.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Just <span className="font-semibold">ONE stroke</span> is all it takes – no mess is EVER left behind!
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Plus, Made Up Brush won’t EVER leave a scratch on floors or furniture, and the genius built-in squeegee makes it amazing for cleaning cars & windows!
        </p>
        
        <ul className="text-left text-gray-700 list-disc list-inside mb-6">
          <li className="font-semibold">Sweep, Scrub & Squeegee!</li>
          <li className="font-semibold">Effortlessly Tackle Wet AND Dry Mess</li>
          <li className="font-semibold">Perfect for Carpets, Furniture, Hard Floors, Patios, Paths, and more</li>
          <li className="font-semibold">Use Indoors AND Outdoors</li>
        </ul>

        <div className="mt-6 text-xl font-bold text-gray-800">
          <p>JUST ONE STROKE IS ALL IT TAKES</p>
          <p>NO MESS IS EVER LEFT BEHIND!</p>
        </div>
      </div>
    </div>
    
  )
}

export default App
