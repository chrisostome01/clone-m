/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <div className="bg-[#3a3e41] text-white px-2">
      <div className="pt-[3.75rem] pb-[2.5rem] flex flex-col lg:flex-row justify-between">
        <div className="">
          <h3 className="mb-[2.5rem] text-[1.5rem] ">
            Materna Information & Communications SE
          </h3>
          <div className="mb-[2.5rem]">
            <p>Voßkuhle 37</p>
            <p>44141 Dortmund, Germany</p>
          </div>
          <div className="mb-[2.5rem]">
            <p>+49 231 5599-00</p>
            <p>marketing@materna.de</p>
          </div>
        </div>
        <div className="">
          <h3 className="mb-[2.5rem] text-[1.5rem] text-center">
            We are social
          </h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="p-2 bg-[#4a4e52]">
              <img src="/twi.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="p-2 bg-[#4a4e52]">
              <img src="/twi.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="p-2 bg-[#4a4e52]">
              <img src="/twi.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="p-2 bg-[#4a4e52]">
              <img src="/twi.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="p-2 bg-[#4a4e52]">
              <img src="/twi.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="p-2 bg-[#4a4e52]">
              <img src="/twi.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="p-2 bg-[#4a4e52]">
              <img src="/twi.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="p-2 bg-[#4a4e52]">
              <img src="/bb.svg" alt="" className="h-[60px] w-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
