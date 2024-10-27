import NavBar from "@/app/navbar/navbar";

export default function home() {
  return (
    <div>
      <NavBar />
      <div className="  h-[1028px] m-auto w-[1046px] mt-2 grid gap-[80px]">
        <div className="  h-[496px] m-auto w-[701px] justify-center text-center p-10 gap-10 grid">
          <h5 className=" text-[#23A6F0] font-bold text-base tracking-[0.1px] w-[77px] h-[24px] text-center m-auto">
            Welcome
          </h5>
          <h1 className=" text-[#ffffff] font-bold text-6xl tracking-wide leading-[80px] w-[542px] h-[160px] text-center m-auto">
            Selling on the internet like a pro
          </h1>
          <h5 className=" font-normal text-xl text-[#ffffff] tracking-[0.2px] leading-[30px] w-[536px] h-[60px] text-center m-auto">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h5>
          <div className="w-[365px] h-[52px] flex gap-2.5 m-auto">
            <button className="w-[193px] h-[52px] rounded-[5px] text-14 font-bold py-[15px] px-9 bg-[#23A6F0] gap-2.5 text-[#ffffff] hover:bg-[#21658b] transition ease-in-out delay-150  duration-300">
              Get Quote Now
            </button>
            <button className="w-[162px] h-[52px] rounded-[5px] py-[15px] px-9 bg-transparent gap-2.5 text-[#23A6F0] border-solid border-[1px] text-14 font-bold border-[#23A6F0] hover:bg-[#23A6F0] transition ease-in-out delay-150 hover:text-white duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[1046px] h-[292px] m-auto flex gap-[30px]">
          <div className="w-[328px] h-[292px] py-[35px] px-10 bg-white grid gap-5 hover:bg-gray-100 transition ease-in-out delay-150 hover:scale-110 duration-300">
            <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px] "></div>
            <h5 className=" font-bold text-base text-[#252B42]">
              training Courses
            </h5>
            <hr className=" w-[50px] h-[2px] bg-[#E74040]" />
            <p className=" text-sm text-[#737373]">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[328px] h-[292px] py-[35px] px-10 bg-white grid gap-5  hover:bg-gray-100 transition ease-in-out delay-150 hover:scale-110 duration-300">
          <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-[10px] "></div>
            <h5 className=" font-bold text-base text-[#252B42]">
            2,769 online courses
            </h5>
            <hr className=" w-[50px] h-[2px] bg-[#E74040]" />
            <p className=" text-sm text-[#737373]">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[328px] h-[292px] py-[35px] px-10 text-white bg-[#23A6F0] grid gap-5 hover:bg-cyan-600 transition ease-in-out delay-150 hover:scale-110 duration-300">
          <div className="w-[70px] h-[76px] bg-white rounded-[10px] "></div>
            <h5 className=" font-bold text-base">
            2,769 online courses
            </h5>
            <hr className=" w-[50px] h-[2px] bg-white" />
            <p className=" text-sm ">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
