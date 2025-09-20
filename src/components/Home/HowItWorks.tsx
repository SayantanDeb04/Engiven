const HowItWorks = () => {
  return (
    <>
      <div>
        <h1
          id="how-it-works"
          className="text-gradient text-center text-6xl  font-bold"
        >
          How it works
        </h1>
        <div className="h-[125px]"></div>
        <div className="mx-20">
          <h1 className="font-eudoxus text-4xl font-bold text-[#7B92B2]">
            For donors
          </h1>
        </div>
        <div className="h-[75px]"></div>
        <div className="mx-40 flex flex-row space-x-14 text-dark">
          <div className="flex-1">
            <div className="btn-circle flex h-12 w-12 items-center justify-center bg-blue-2">
              <span className="font-inter text-xl font-bold text-white">1</span>
            </div>
            <div className="pt-8">
              <h1 className="font-eudoxus text-2xl font-bold">
                Explore charities
              </h1>
              <p className="pt-4 text-[#737b7f]">
                Users are recommended with some charities. They can also search
                for a charity of their choice.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="btn-circle flex h-12 w-12 items-center justify-center bg-blue-2">
              <span className="font-inter text-xl font-bold text-white">2</span>
            </div>
            <div className="pt-8">
              <h1 className="font-eudoxus text-2xl font-bold">
                Pick a charity
              </h1>
              <p className="pt-4 text-[#737b7f]">
                After exploring the available charities, users can choose a
                charity they like.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="btn-circle flex h-12 w-12 items-center justify-center bg-blue-2">
              <span className="font-inter text-xl font-bold text-white">3</span>
            </div>
            <div className="pt-8">
              <h1 className="font-eudoxus text-2xl font-bold">
                Donate using <span className="text-gradient">ETH</span>
              </h1>
              <p className="pt-4 text-[#737b7f]">
                If users like the charity and their statement, the users can
                donate to the charity using ETH.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[100px]"></div>
        <div className="mx-20">
          <h1 className="font-eudoxus text-4xl font-bold text-[#7B92B2]">
            For beneficiaries
          </h1>
        </div>
        <div className="h-[75px]"></div>
        <div className="mx-40 flex flex-row space-x-14">
          <div className="flex-1">
            <div className="btn-circle flex h-12 w-12 items-center justify-center bg-blue-2">
              <span className="font-inter text-xl font-bold text-white">1</span>
            </div>
            <div className="pt-8">
              <h1 className="font-eudoxus text-2xl font-bold">
                Create a charity
              </h1>
              <p className="pt-4 text-[#737b7f]">
                Beneficiaries can create a charity to obtain funds from donors.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="btn-circle flex h-12 w-12 items-center justify-center bg-blue-2">
              <span className="font-inter text-xl font-bold text-white">2</span>
            </div>
            <div className="pt-8">
              <h1 className="font-eudoxus text-2xl font-bold">
                Provide a statement
              </h1>
              <p className="pt-4 text-[#737b7f]">
                The Beneficiary should provide a charity mission which would
                help donors decide if the charity is worth donating to.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="btn-circle flex h-12 w-12 items-center justify-center bg-blue-2">
              <span className="font-inter text-xl font-bold text-white">3</span>
            </div>
            <div className="pt-8">
              <h1 className="font-eudoxus text-2xl font-bold">
                Obtain crypto payments
              </h1>
              <p className="pt-4 text-[#737b7f]">
                The Beneficiary obtains instant payments to their crypto wallets
                without any hassle. Powered by ETH and Polygon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
