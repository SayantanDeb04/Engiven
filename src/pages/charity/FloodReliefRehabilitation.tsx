import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import LatestDonationCompact from "../../components/Charity/LatestDonationCompact";
import DonationMessage from "../../components/Charity/DonationMessage";

const FloodReliefRehabilitation: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[50px]" />
      <div className="flex min-h-screen flex-row space-x-20 px-16">
        <div className="basis-2/3">
          <div className="h-full w-full px-2 py-4">
            <h1 className="pb-8 font-eudoxus text-4xl font-bold text-[#25353d]">
              Flood Relief & Rehabilitation – Assam 2025
            </h1>
            <img
              src="/OIP.png"
              alt="Flood Relief & Rehabilitation"
              className="w-full rounded-md"
            />
            <div className="h-[50px]" />
            <span className="text-gradient font-eudoxus text-3xl font-bold text-[#25353d]">
              Our Mission
            </span>
            <div className="h-[35px]" />
            <div className="font-inter text-[#646b6e]">
              The Flood Relief & Rehabilitation Project launches in November 2025
              and continues through the next year. This initiative provides
              emergency relief and long-term rehabilitation for flood-affected
              families in Assam. We’re delivering food, shelter, medical aid,
              and rebuilding homes for over 1,000 displaced families. Learn how
              our partner organizations are working to restore dignity and hope
              in flood-hit communities. Make an online contribution here through
              Engiven powered by Polygon and web3. All donations will directly
              support emergency supplies and rebuilding efforts. Administrative
              costs are underwritten by our foundation partners. To read past
              updates, visit the Flood Relief & Rehabilitation page. Recent
              reports are available free to all readers. Please share the
              stories that inspire you.
              <br />
              <br />
              The Flood Relief & Rehabilitation Project is operated as a
              not-for-profit public initiative under Section 501(c)(3) of the
              Internal Revenue Code. Contributions to this project are
              tax-deductible to the extent permitted by law. Federal
              Identification Number: 45-7891234. A copy of the project’s latest
              annual financial report may be obtained, upon request, from the
              Project Office or from the Assam State Charities Bureau, Attn:
              FOIL Officer, Dispur, Assam 781006.
              <br />
              <br />
              Our local partners in Assam coordinate relief camps, distribute
              essential supplies, and train community members for disaster
              preparedness. Funds raised through the Flood Relief &
              Rehabilitation Project support emergency aid kits, medical camps,
              shelter reconstruction, and livelihood restoration programs.
              Together we are helping families recover and rebuild their lives
              with dignity and resilience.
            </div>

            <div className="pt-16">
              <span className="text-gradient font-eudoxus text-3xl font-bold">
                Messages from the Donors
              </span>
              <div className="pb-16" />
              <div className="flex flex-col space-y-6">
                <DonationMessage
                  donor="Priya Sen"
                  amount={100}
                  message="Praying for the families affected and glad to support rebuilding efforts."
                />
                <DonationMessage
                  donor="Anonymous"
                  amount={50}
                  message="Emergency relief can save lives. Thank you for organizing this."
                />
                <DonationMessage
                  donor="Amit Roy"
                  amount={250}
                  message="Helping Assam stand strong again. Proud to contribute."
                />
              </div>
            </div>
          </div>
          <div className="h-[40px]" />
        </div>
        <div
          id="sidebar-right"
          className="basis-1/3 rounded-md bg-[#fefefe] shadow-lg"
        >
          <div className="h-full w-full px-6 py-8 font-inter">
            <span className="font-lato">
              <span className="text-gradient text-xl font-bold">$1,850</span>
              &nbsp;&nbsp;
              <span className="text-sm text-[#7d8386]">
                raised of $5,000 goal
              </span>
            </span>
            <div className="pt-2" />
            <progress
              className="progress progress-success bg-[#E6F6EF]"
              value={37}
              max={100}
            />
            <div className="pb-2" />
            <span className="font-inter text-sm text-gray">
              21 donations raised
            </span>
            <div className="pb-16" />
            <Link href="/charity/the-small-world/donate">
              <span className="btn w-full rounded-md border-blue bg-blue text-white hover:btn-primary">
                Donate
              </span>
            </Link>
            <div className="pb-4" />
            <span className="btn w-full rounded-md border-bluegray bg-bluegray text-white">
              Share Charity
            </span>
            <div className="pb-16" />
            <div>
              <span className="text-xl font-bold text-dark">
                Latest Donations
              </span>
              <div className="flex flex-col items-center space-y-5 pt-10">
                <LatestDonationCompact donor="Meera" amount={40} />
                <LatestDonationCompact donor="Anonymous" amount={60} />
                <LatestDonationCompact donor="Sanjay" amount={100} />
                <LatestDonationCompact donor="Nadia" amount={25} />
                <LatestDonationCompact donor="HelpingHands" amount={75} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[150px]" />
      <Footer />
    </div>
  );
};

export default FloodReliefRehabilitation;
