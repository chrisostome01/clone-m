/* eslint-disable @next/next/no-img-element */
export default function Card() {
  return (
    <div className="inline-grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="bg-[#e9eef1] flex flex-col">
        <div className="relative w-full">
          <img src="/Cloud.png" alt="" className="h-[12.625rem] w-full" />
        </div>
        <div className="p-[1.25rem] flex flex-col flex-grow">
          <h3 className="text-[#c30a17] mb-[0.625rem] font-medium tracking-tighter">
            We accompany your Journey2Cloud
          </h3>
          <p className="text-[#3a3e41]">
            We analyze your application landscapes and transfer them step by
            step into a sustainable model.
          </p>
          <div className="flex flex-grow items-end justify-end">
            <div className="bg-[#c30a17] min-w-full md:min-w-[2.75rem] mt-[0.625rem] text-white px-[1.25rem] py-[0.625rem] text-center cursor-pointer">
              More
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e9eef1] flex flex-col">
        <div className="relative w-full">
          <img src="/security.png" alt="" className="h-[12.625rem] w-full" />
        </div>
        <div className="p-[1.25rem] flex flex-col flex-grow">
          <h3 className="text-[#c30a17] mb-[0.625rem] font-medium tracking-tighter">
            Cyber Security
          </h3>
          <p className="text-[#3a3e41]">
            Our cyber services help you before, during and after any damage
            might occur by providing secure applications development, protection
            for your IT and information security.
          </p>
          <div className="flex flex-grow items-end justify-end">
            <div className="bg-[#c30a17] min-w-full md:min-w-[2.75rem] mt-[0.625rem] text-white px-[1.25rem] py-[0.625rem] text-center cursor-pointer">
              More
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e9eef1] flex flex-col">
        <div className="relative w-full">
          <img src="/ESM.png" alt="" className="h-[12.625rem] w-full" />
        </div>
        <div className="p-[1.25rem] flex flex-col flex-grow">
          <h3 className="text-[#c30a17] mb-[0.625rem] font-medium tracking-tighter">
            Enterprise Service Management
          </h3>
          <p className="text-[#3a3e41]">
            Benefit from the market leader for service management. More than
            1,000 customers across all sectors.
          </p>
          <div className="flex flex-grow items-end justify-end">
            <div className="bg-[#c30a17] min-w-full md:min-w-[2.75rem] mt-[0.625rem] text-white px-[1.25rem] py-[0.625rem] text-center cursor-pointer">
              More
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e9eef1] flex flex-col">
        <div className="relative w-full">
          <img
            src="/manufacturing.png"
            alt=""
            className="h-[12.625rem] w-full"
          />
        </div>
        <div className="p-[1.25rem] flex flex-col flex-grow">
          <h3 className="text-[#c30a17] mb-[0.625rem] font-medium tracking-tighter">
            IoT-based services for manufacturing
          </h3>
          <p className="text-[#3a3e41]">
            Materna’s technology expertise helps companies to develop their
            business processes further enabling them to enter new markets.
          </p>
          <div className="flex flex-grow items-end justify-end">
            <div className="bg-[#c30a17] min-w-full md:min-w-[2.75rem] mt-[0.625rem] text-white px-[1.25rem] py-[0.625rem] text-center cursor-pointer">
              More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
