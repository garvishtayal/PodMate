import Main from "../../Components/Podcast/Main";
import Topbar from "../../Components/Podcast/Topbar";

function Podcast() {
  return (
    <>
      <div className="md:h-screen flex flex-col  bg-mainPg bg-cover">
        {/* Background-Image container */}
        <div className="h-screen w-screen absolute z-0 backdrop-blur-sm"></div>

        {/* TOPBAR */}
        <div className="basis-1/12 text-white z-10 pt-5 md:pt-0">
          <Topbar />
        </div>

        {/* Main */}
        <div className="flex flex-1 z-10 py-20 pl-4 pr-2 md:pl-16 md:pr-0">
          {/* Left */}
          <div className=" basis-full text-white">
            <Main />
          </div>

          {/* Right */}
          <div className="basis-2/12 hidden lg:block text-white text-right mr-7">
            <p className="text-sm mb-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p className="font-semibold text-3xl">Doing it for the Money</p>
          </div>

          {/* PodCast Containter */}
          <div className="basis-4/12 hidden md:flex flex-col">
            <div className="w-full h-48">
              <div>
                <img src="/video.png" alt="" />
              </div>
              {/* <div>info</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcast;
