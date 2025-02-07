import { useState } from 'react'
import LandingPage from './LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<LandingPage/>
</>
    //  <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
    //   <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
    //     <h1 className="text-4xl font-bold text-blue-600 mb-4">
    //       THE BRUSH THAT DOES IT ALL!
    //     </h1>
    //     <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //       Introducing Made Up Brush
    //     </h2>
    //     <p className="text-gray-600 text-lg mb-6">
    //       Tackle wet AND dry messes effortlessly with the revolutionary rubber broom that cleans anything, anywhere – indoors AND out.
    //     </p>
    //     <p className="text-gray-600 text-lg mb-6">
    //       Its <span className="font-semibold">584 rubber fingers</span> form an <span className="font-semibold">IMPENETRABLE wall</span> while creating a static charge that attracts dirt like a magnet.
    //     </p>
    //     <p className="text-gray-600 text-lg mb-6">
    //       Just <span className="font-semibold">ONE stroke</span> is all it takes – no mess is EVER left behind!
    //     </p>
    //     <p className="text-gray-600 text-lg mb-6">
    //       Plus, Made Up Brush won’t EVER leave a scratch on floors or furniture, and the genius built-in squeegee makes it amazing for cleaning cars & windows!
    //     </p>
        
    //     <ul className="text-left text-gray-700 list-disc list-inside mb-6">
    //       <li className="font-semibold">Sweep, Scrub & Squeegee!</li>
    //       <li className="font-semibold">Effortlessly Tackle Wet AND Dry Mess</li>
    //       <li className="font-semibold">Perfect for Carpets, Furniture, Hard Floors, Patios, Paths, and more</li>
    //       <li className="font-semibold">Use Indoors AND Outdoors</li>
    //     </ul>

    //     <div className="mt-6 text-xl font-bold text-gray-800">
    //       <p>JUST ONE STROKE IS ALL IT TAKES</p>
    //       <p>NO MESS IS EVER LEFT BEHIND!</p>
    //     </div>
    //   </div>
    // </div>
    
  )
}

export default App
