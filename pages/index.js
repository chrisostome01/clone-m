/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import Card from "../components/ui/Card";
import Footer from "../components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* start: header */}
      <header className="bg-[url('/buehne_startseite.svg')] min-h-screen md:bg-cover bg-centered bg-no-repeat">
        <nav className="bg-white text-white relative w-full hidden lg:flex justify-end h-[3.25rem] gap-[1rem] px-2">
          {/* nav item */}
          <div className="flex gap-[1rem] items-center  tracking-[.5px] px-[1.25rem] py-[0.25rem]">
            <span className="text-[#3a3e41]">Newsroom</span>
          </div>
          {/* nav item */}
          <div className="flex gap-[1rem] items-center  tracking-[.5px] px-[1.25rem] py-[0.25rem]">
            <span className="text-[#3a3e41]">Contact</span>
          </div>
          {/* nav item */}
          <div className="flex gap-[1rem] items-center  tracking-[.5px] px-[1.25rem] py-[0.25rem]">
            <span className="text-[#3a3e41]">English</span>
          </div>
        </nav>
        <nav className="bg-[#c30a17] text-white relative w-full flex h-[3.25rem] gap-[1rem] px-2 lg:hidden">
          {/* nav item */}
          <div className="flex gap-[1rem] items-center  tracking-[.5px] ">
            <img src="/menu.svg" alt="" className="h-[1.25rem] w-[1.25rem] " />
            <span className="text-white">Menu</span>
          </div>
          {/* nav item */}
          <div className="flex gap-[0.5rem] items-center  tracking-[.5px]">
            <img src="/search.svg" alt="" className="h-[1.25rem] w-[1.25rem]" />
            <span className="text-white">Search</span>
          </div>
        </nav>
        <div className="px-2">
          <div className="relative flex items-center gap-5">
            <div className="pt-[0.625rem] hidden lg:block w-[260px] relative after:bg-[#c30a17] after:w-full after:max-h-[19rem] after:min-h-[16rem] after:absolute after:-top-[190%] after:left-0">
              <div className="flex w-full items-center justify-center">
                <img
                  src="/logo-transparent.svg"
                  alt=""
                  className="relative z-50"
                />
              </div>
            </div>

            <nav className="bg-[#c30a17] text-white relative w-full hidden h-[3.25rem] gap-[1rem] px-2 lg:flex">
              {/* nav item */}
              <div className="flex gap-[1rem] items-center  tracking-[.5px] ">
                <span className="text-[1.2rem]">Port­fo­lio</span>
              </div>
              {/* nav item */}
              <div className="flex gap-[0.5rem] items-center  tracking-[.5px]">
                <span className="text-[1.2rem]">Search</span>
              </div>
              {/* nav item */}
              <div className="flex gap-[0.5rem] items-center  tracking-[.5px]">
                <span className="text-[1.2rem]">In­dus­tries</span>
              </div>
              {/* nav item */}
              <div className="flex gap-[0.5rem] items-center  tracking-[.5px]">
                <span className="text-[1.2rem]">Cus­tomers</span>
              </div>
              {/* nav item */}
              <div className="flex gap-[0.5rem] items-center  tracking-[.5px]">
                <span className="text-[1.2rem]">About us</span>
              </div>
              {/* nav item */}
              <div className="flex gap-[0.5rem] items-center  tracking-[.5px]">
                <span className="text-[1.2rem]">Events</span>
              </div>
              {/* nav item */}
              <div className="flex gap-[0.5rem] items-center  tracking-[.5px]">
                <span className="text-[1.2rem]">Ca­reers</span>
              </div>
            </nav>
          </div>
          <div className="">
            <div className="pt-[0.625rem] lg:hidden">
              <img
                src="/logo-small.svg"
                alt=""
                className="min-h-[6.25rem] w-[6.25rem]"
              />
            </div>
            {/* start: hero */}
            <div className="flex flex-col gap-2 md:flex-row ">
              <div className="max-w-[37.5rem] min-h-[25.6875rem] border-[5px] border-[#c30a17] mt-[0.625rem] p-2 flex flex-col items-center justify-center">
                <div className="uppercase text-5xl tracking-[-0.06em] text-white mb-[15px]">
                  We are digitizing your World.
                </div>
                <p className="text-white">
                  As a key globally active IT service provider, we advise and
                  assist you in all aspects of digitization and provide
                  tailor-made technologies for agile, flexible and secure IT.
                </p>
              </div>
              <div className="mt-[30px] flex flex-col gap-4 justify-around">
                <div className="bg-[#c30a17] text-white p-[1.25rem] md:w-[296px]">
                  Portfolio
                </div>
                <div className="bg-[#c30a17] text-white p-[1.25rem] md:w-[296px]">
                  About us
                </div>
                <div className="bg-[#c30a17] text-white p-[1.25rem] md:w-[296px]">
                  Careers
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* start: card section */}
      <div className="py-12 px-4">
        <h1 className="text-center text-3xl mb-12">
          Learn more about our portfolio
        </h1>
        <Card />
      </div>
      {/* start: card slide */}
      <div></div>
      {/* start: footer */}
      <Footer />
    </>
  );
}
