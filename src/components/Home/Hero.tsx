import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/hero-image.png"
            className="max-w-sm rounded-lg md:flex"
          />

          <div className="flex flex-row">
            <div className="flex-1">
              <h1 className="pb-2 font-eudoxus text-[42px] font-bold leading-[48px] text-dark">
                The decentralized way to charity.
              </h1>
              <p className="mt-6 mb-10 text-xl text-gray">
                Engiven leverages web3 technologies to provide a
                decentralized way of fundraising for charities around the globe.
              </p>
              <div className="mt-4">
                <Link href="#get-started" scroll={false}>
                  <button className="btn-lg btn rounded-xl border-blue bg-blue normal-case text-white">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
