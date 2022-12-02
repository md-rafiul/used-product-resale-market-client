import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Growth = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="my-20">
      <div className="bg-accent">
        <div className="pb-20">
          <div className="mx-auto bg-gradient-to-l from-primary to-primary h-96">
            <div className="mx-auto container w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <div className="mt-20">
                  <h2 className="lg:text-6xl md:text-5xl text-4xl  text-center mb-6 font-semibold text-white ">
                    About <span className="text-accent">our Growth</span>
                  </h2>
                </div>
                <div className="mt-6 mx-2 md:mx-0 text-center">
                  <p className="lg:text-lg md:text-base leading-6 text-sm text-white">
                    5 years, consistent quality and you get results. No matter
                    what
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  <>
                    <div className="content" />
                    <span className="lg:text-5xl">
                      {<CountUp end={10} enableScrollSpy />}K+
                    </span>
                    <br />
                    <span className="hidden" id="counter" />
                  </>
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  Happy Clients
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  <>
                    <div className="content" />
                    <span className="lg:text-5xl">
                      {<CountUp end={30} enableScrollSpy />}K+
                    </span>
                    <br />
                    <span className="hidden" id="counter" />
                  </>
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  served customers
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  <>
                    <div className="content" />
                    <span className="lg:text-5xl">
                      {<CountUp end={500} enableScrollSpy />}k+
                    </span>
                    <br />
                    <span className="hidden" id="counter" />
                  </>
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  Annual revenue
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  <>
                    <div className="content" />
                    <span className="lg:text-5xl">
                      {<CountUp end={1200} enableScrollSpy />}K+
                    </span>
                    <br />
                    <span className="hidden" id="counter" />
                  </>
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
