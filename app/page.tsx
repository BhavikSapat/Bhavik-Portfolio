"use client";

import Image from "next/image";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto px-6 py-10 md:px-35 md:py-10">
        <div className="flex  md:flex-row items-center justify-between gap-12">
          <div className="flex-1 items-center text-left md:text-left">
            <p className="text-1.8xl md:text-3xl mb-2">Hello, I'm</p>

            <h1 className="text-4xl md:text-6xl font-bold">Bhavik Sapat</h1>

            <p className="mt-7 text-lg md:text-2xl">Web Designer & Developer</p>
          </div>

          <div className="flex justify-center">
            {/* <div className="relative w-[170px] h-[170px] md:w-[300px] md:h-[300px] bg-yellow-400 z-0 rounded-full overflow-visible"> */}
            <Image
              src="/havik.png"
              alt="Bhavik Sapat"
              width={330}
              height={330}
              className=" object-cover border-1 border-white-700 shadow-xl"
              // className="absolute -top-[100px]  left-1/2 -translate-x-1/2 z-10 object-contain"
            />
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 text-center gap-6">
          <div>
            <h2 className="text-3xl font-bold">1+</h2>
            <p className="mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="mt-2">Clients</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-2">Projects Done</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
