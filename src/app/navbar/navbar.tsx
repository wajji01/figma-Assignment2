import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="w-[1322px] h-[91px] m-auto flex text-white">
        <div className="w-[187px] h-[58px] mt-[17px] ms-[136px] font-bold text-2xl">
          <h3 className=" w-[152px] h-[32px] mt-[13px]">BrandName</h3>
        </div>
        <div className="w-[815px] h-[58px] mt-[17px] ms-[40px] font-bold flex">
          <div className="w-[275px] h-[24px] mt-[17px] font-bold flex gap-[21px]">
            <Link
              href="/"
              className=" hover:text-[#23A6F0] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              Home
            </Link>
            <Link
              href="/"
              className=" hover:text-[#23A6F0] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Product
            </Link>
            <Link
              href="/"
              className=" hover:text-[#23A6F0] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className=" hover:text-[#23A6F0] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Contect
            </Link>
          </div>
          <div className="w-[189px] h-[52px] mt-[3px] ms-[350px] font-bold flex gap-[45px]">
            <Link
              href="#"
              className=" hover:text-[#23A6F0] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-sm w-[41px] h-[22px] mt-[17px]"
            >
              Login
            </Link>
            <span>
              <button className=" h-[52px] w-[110px] py-[15px] px-[25px] text-sm font-bold bg-[#23A6F0] rounded-md  hover:bg-[#3395ce] transition ease-in-out delay-150 hover:scale-110 duration-300">
                JOIN US
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
