import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <div>
        <h1
          id="get-started"
          className="text-gradient text-center text-6xl font-bold"
        >
          Get Started
        </h1>
        <div className="h-[125px]"></div>
        <div className="flex flex-row space-x-24 px-16">
          <div className="flex-1 flex flex-col">
            <h1 className="text-center font-eudoxus text-4xl font-bold text-bluegray">
              For donors
            </h1>
            <div className="pt-16 pb-8">
              <p className="text-center font-inter text-[19px] text-gray">
                If you like the concept of this web3 powered fundraising
                platform, you may look for charities to donate to. Click the
                button below to view some charities which you might like.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-col items-center">
                <Link href="/browse">
                  <button className="btn rounded-md border-blue bg-blue font-inter normal-case text-white">
                    Browse Charities
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <h1 className="text-center font-eudoxus text-4xl font-bold text-bluegray">
              For beneficiaries
            </h1>
            <div className="pt-16 pb-8">
              <p className="text-center font-inter text-[19px] text-gray">
                Become a beneficiary to receive donations from people around the globe. A bank account is not required as well. You may accept donations in ETH or MATIC.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-col items-center">
                <Link href="/become-beneficiary">
                  <button className="btn rounded-md border-blue bg-blue font-inter normal-case text-white">
                    Become a Beneficiary
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
