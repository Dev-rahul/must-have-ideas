import mainLogo from "./assets/images/0E3A1911.png";
import carImg from "./assets/images/0E3A1885.JPG";
import carpetImg from "./assets/images/1W4A8217_blue.jpg";
import logo from "./assets/images/made-up-brush-logo.png";
import brushFloor from "./assets/images/0E3A3545.JPG";
import sweepImage from "./assets/images/0E3A2158.JPG";
import scrubImage from "./assets/images/0E3A3494.JPG";
import brushImage from "./assets/images/0E3A1898.JPG";
import squeegeeImage from "./assets/images/0E3A2153.JPG";
import backgroundImage from "./assets/images/0E3A2155.JPG";

function App() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-6 font-rubik">
      <div className="w-full bg-white shadow-lg rounded-2xl p-2 md:p-8 text-center">
        {/* Page 1 - Desktop & Mobile */}

        <div className="max-sm:hidden">
          <div className="flex justify-center items-center md:min-h-screen bg-white md:p-4 md:pb-12">
            <div className="mx-auto w-full max-w-[1507px] bg-white relative overflow-visible">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src={mainLogo}
                  alt="Brush cleaning wooden floor"
                  className="w-full h-auto md:h-[821px] border-12 border-[#001b51] rounded-2xl"
                />
                <h1 className="absolute top-8 left-8 p-8 rounded-md">
                  <img
                    src={logo}
                    alt="Made Up Brush Logo"
                    className="w-[200px] md:w-[620.6px]"
                  />
                </h1>
                {/* Small Circular Images */}
                <div className="absolute top-8 right-8 flex flex-col space-y-4">
                  <img
                    src={carImg}
                    alt="Cleaning car"
                    className="w-[100px] h-[100px] md:w-[328px] md:h-[328px] rounded-full border-[5px] md:border-[10px] border-[#001b51] object-cover"
                  />
                  <img
                    src={carpetImg}
                    alt="Cleaning carpet"
                    className="w-[100px] h-[100px] md:w-[328px] md:h-[328px] rounded-full border-[5px] md:border-[10px] border-[#001b51] object-cover"
                  />
                </div>
              </div>
              {/* Footer Text */}
              <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 bg-[#001b51] text-white text-center text-[24px] md:text-[82.7px] p-2 md:p-3 rounded-full w-[90%] md:w-[1342.4px]">
                THE BRUSH THAT DOES IT{" "}
                <span className="text-white font-bold">ALL!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <div className="flex justify-center items-center  bg-white p-2 pb-2 flex-col md:flex-row">
            <h1 className="bg-[#001b51] text-white text-center text-[24px] md:text-[82.7px] p-3 rounded-full w-full md:w-[1342.4px] mb-4">
              THE BRUSH THAT DOES IT{" "}
              <span className="text-white font-bold">ALL!</span>
            </h1>
            <div className="mx-auto w-full max-w-[700px] md:max-w-[1507px] bg-white relative overflow-visible">
              <div className="relative overflow-hidden  rounded-2xl ">
                <img
                  src={mainLogo}
                  alt="Brush cleaning wooden floor"
                  className="w-full h-auto rounded-2xl border-4 border-[#001b51]"
                />
                <div className="absolute top-2 right-2 flex flex-col space-y-2 md:space-y-4">
                  <img
                    src={carImg}
                    alt="Cleaning car"
                    className="w-[50px] h-[50px]  md:w-[328px] md:h-[328px] rounded-full border-[4px] md:border-[10px] border-[#001b51] object-cover"
                  />
                  <img
                    src={carpetImg}
                    alt="Cleaning carpet"
                    className="w-[50px] h-[50px] md:w-[328px] md:h-[328px] rounded-full border-[4px] md:border-[10px] border-[#001b51] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="top-2 p-8 rounded-md">
                  <img
                    src={logo}
                    alt="Made Up Brush Logo"
                    className="w-full"
                  />
                </div>
        </div>

        {/* Page 2 - Desktop & Mobile */}
        <div className="mt-8 mx-4 md:mx-[360px] text-center text-[#001b51] text-[20px] md:text-[40px]">
          <h2 className="font-bold text-[30px] md:text-[60px] mb-4">
            Introducing Made Up Brush
          </h2>
          <p className="mb-4">
            Tackle wet <span className="font-extrabold">AND</span> dry messes
            effortlessly with the revolutionary rubber broom that cleans
            anything, anywhere—indoors{" "}
            <span className="font-extrabold">AND</span> out.
          </p>
          <p className="mb-4">
            Its 584 rubber fingers form an{" "}
            <span className="font-extrabold">IMPENETRABLE</span> wall while
            creating a static charge that attracts dirt like a magnet.
          </p>
          <p className="mb-4">
            Just <span className="font-extrabold">ONE</span> stroke is all it
            takes—no mess is <span className="font-extrabold">EVER</span> left
            behind.
          </p>
          <p className="mb-4">
            Plus, Made Up Brush won't{" "}
            <span className="font-extrabold">EVER</span> leave a scratch on
            floors or furniture and the genius built-in squeegee makes it
            amazing for cleaning cars & windows!
          </p>
        </div>

        {/* Page 3 - Desktop & Mobile */}
        <div className="relative mt-8 min-h-screen bg-[#78B9FF] flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
          {/* Image Container */}
          <div className="relative flex-shrink-0 overflow-hidden mb-8 md:mb-0">
            <img
              src={brushFloor}
              alt="Broom sweeping leaves on floor"
              className="w-[400px] h-[400px] md:w-[673px] md:h-[673px] border-[5px] md:border-[10px] border-[#001b51] rounded-2xl"
            />
          </div>

          {/* Text Content */}
          <div className=" ml-2 md:ml-8 text-left text-[#ffffff] max-w-[800px]">
            <p className="mb-4 text-[24px] md:text-[41.1px]">
              ➜ Sweep, Scrub & Squeegee!
            </p>
            <p className="mb-4 text-[24px] md:text-[41.1px]">
              ➜ Effortlessly Tackle Wet{" "}
              <span className="font-extrabold">AND</span> Dry Mess
            </p>
            <p className="mb-4 text-[24px] md:text-[41.1px]">
              ➜ Perfect for Carpets, Furniture, Hard Floors, Patios, Paths, and
              more
            </p>
            <p className="text-[24px] md:text-[41.1px]">
              ➜ Use Indoors <span className="font-extrabold">AND</span> Outdoors
            </p>
          </div>
        </div>

        {/* Page 4 - Desktop & Mobile */}
        <div className="relative mt-8 bg-white flex flex-col items-center justify-center p-4 md:p-8">
          <div className="flex flex-wrap justify-center gap-8 ">
            {/* Circle Image 1 */}
            <div className="relative flex flex-col max-sm:basis-[30%] items-center">
              <div className="relative">
                <div className="w-[150px] h-[150px] md:w-[330.7px] md:h-[330.7px] border-[5px] md:border-[8px] border-[#001b51] rounded-full overflow-hidden">
                  <img
                    src={sweepImage}
                    alt="Sweep"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-[#78B9FF] text-white text-[20px] md:text-[43px] px-4 md:px-6 py-1 md:py-2 rounded-full z-10 whitespace-nowrap">
                  SWEEP
                </div>
              </div>
            </div>
            {/* Circle Image 2 */}
            <div className="relative flex flex-col items-center">
            <div className="relative">
              <div className="w-[150px] h-[150px] md:w-[330.7px] md:h-[330.7px] border-[5px] md:border-[8px] border-[#001b51] rounded-full overflow-hidden">
                <img
                  src={scrubImage}
                  alt="Scrub"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-[#78B9FF] text-white text-[20px] md:text-[43px] px-4 md:px-6 py-1 md:py-2 rounded-full z-10 whitespace-nowrap">
                SCRUB
              </div>
              </div>
            </div>

            {/* Circle Image 3 */}
            <div className="relative flex flex-col items-center pb-2">
            <div className="relative">
              <div className="w-[150px] h-[150px] md:w-[330.7px] md:h-[330.7px] border-[5px] md:border-[8px] border-[#001b51] rounded-full overflow-hidden">
                <img
                  src={brushImage}
                  alt="Brush"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-[#78B9FF] text-white text-[20px] md:text-[43px] px-4 md:px-6 py-1 md:py-2 rounded-full z-10 whitespace-nowrap ">
                BRUSH
              </div>
              </div>
            </div>

            {/* Circle Image 4 */}
            <div className="relative flex flex-col items-center">
            <div className="relative">
              <div className="w-[150px] h-[150px] md:w-[330.7px] md:h-[330.7px] border-[5px] md:border-[8px] border-[#001b51] rounded-full overflow-hidden">
                <img
                  src={squeegeeImage}
                  alt="Squeegee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-[#78B9FF] text-white text-[20px] md:text-[43px] px-4 md:px-6 py-1 md:py-2 rounded-full z-10 whitespace-nowrap">
                SQUEEGEE
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Page 5 - Desktop & Mobile */}
        <div
          className="relative mt-8 h-[228.7px] md:min-h-screen bg-cover bg-center flex items-end p-4 md:p-8"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="text-white text-center w-full mb-[30px] md:mb-[60px]">
            <h2 className="text-[16px] md:text-[91.3px]">
              JUST ONE STROKE IS ALL IT TAKES
            </h2>
            <h2 className="text-[16px] md:text-[91.3px] font-extrabold">
              NO MESS IS EVER LEFT BEHIND!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;