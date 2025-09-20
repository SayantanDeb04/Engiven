import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import LatestDonationCompact from "../../components/Charity/LatestDonationCompact";
import DonationMessage from "../../components/Charity/DonationMessage";

const NewyorkAnnualCampaign = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[50px]"></div>
      <div className="flex min-h-screen flex-row space-x-20 px-16">
        <div className="basis-2/3">
          <div className="h-full w-full px-2 py-4">
            <h1 className="pb-8 font-eudoxus text-4xl font-bold text-[#25353d]">
              <span className="text-gradient"></span> Clean Water Wells Project - Desert Communities 2025
              
            </h1>
            <img
              src="/cleanwater.png"
              alt="Clean Water Wells"
              className="w-full rounded-md"
            />
            <div className="h-[50px]"></div>
            <span className="text-gradient font-eudoxus text-3xl font-bold text-[#25353d]">
              Our Mission
            </span>
            <div className="h-[35px]"></div>
            <div className="font-inter text-[#646b6e]">
              
              The Clean Water Wells Project – Desert Communities launches in
              October 2025 and will continue through the coming year. This
              initiative focuses on installing 10 solar-powered water wells in
              remote villages of Rajasthan to provide clean drinking water to
              more than 2,000 people. Learn how our partner organizations work
              to bring sustainable water access to underserved communities and
              support our mission of health and resilience. Make an online
              contribution here through Engiven powered by Polygon and web3.
              All donations will go directly toward building and maintaining
              these wells. Administrative costs are underwritten by our
              foundation partners. To read past updates, visit the Clean Water
              Wells Project page. Recent reports are available free to all
              readers. Please share the stories that inspire you.
              <br />
              <br />
              The Clean Water Wells Project is operated as a not-for-profit
              public initiative under Section 501(c)(3) of the Internal Revenue
              Code. Contributions to this project are tax-deductible to the
              extent permitted by law. Federal Identification Number: 
              45-7891234. A copy of the project’s latest annual financial report
              may be obtained, upon request, from the Project Office or from the
              Rajasthan State Charities Bureau, Attn: FOIL Officer, Jaipur,
              Rajasthan 302001.
              <br />
              <br />
              Our local partners in Rajasthan identify and train community
              members to manage each solar-powered well, ensuring reliable
              operation and long-term sustainability. Every well serves
              approximately 200 people, reducing the time and distance villagers
              travel to access clean water. Funds raised through the Clean Water
              Wells Project support the construction of wells, training of local
              caretakers, and the development of water-conservation awareness
              programs. Together we are helping desert communities thrive with
              dignity and health.
            </div>

            <div className="pt-16">
              <span className="text-gradient font-eudoxus text-3xl font-bold">
                Messages from the Donors
              </span>
              <div className="pb-16"></div>
              <div className="flex flex-col space-y-6">
                <DonationMessage
                  donor="Ramesh Shukla"
                  amount="85"
                  message="ove the sustainable approach with solar-powered wells."
                ></DonationMessage>
                <DonationMessage
                  donor="Mala Deb"
                  amount="200"
                  message="Even a small donation can ripple into a lifetime of change for these communities."
                ></DonationMessage>
                <DonationMessage
                  donor="Anonymous"
                  amount="25"
                  message="#WaterisLife"
                ></DonationMessage>
              </div>
            </div>
          </div>
          <div className="h-[40px]"></div>
        </div>
        <div
          id="sidebar-right"
          className="basis-1/3 rounded-md bg-[#fefefe] shadow-lg"
        >
          {" "}
          <div className="h-full w-full px-6 py-8 font-inter">
            <span className="font-lato">
              <span className="text-gradient text-xl font-bold">$2,100</span>
              &nbsp;&nbsp;
              <span className="text-sm text-[#7d8386]">
                raised of $3,000 goal
              </span>
            </span>
            <div className="pt-2"></div>
            <progress
              className="progress progress-success bg-[#E6F6EF]"
              value="70"
              max="100"
            ></progress>
            <div className="pb-2"></div>
            <span className="font-inter text-sm text-gray">
              34 donations raised
            </span>
            <div className="pb-16"></div>
            <Link href="/charity/the-small-world/donate">
              <span className="btn w-full rounded-md border-blue bg-blue text-white hover:btn-primary">
                Donate
              </span>
            </Link>
            <div className="pb-4"></div>
            <span className="btn w-full rounded-md border-bluegray bg-bluegray text-white">
              Share Charity
            </span>
            <div className="pb-16"></div>
            <div>
              <span className="text-xl font-bold text-dark">
                Latest Donations
              </span>
              <div className="flex flex-col items-center space-y-5 pt-10">
                <LatestDonationCompact donor="Aditya" amount="75" />
                <LatestDonationCompact donor="Anonymous" amount="69" />
                <LatestDonationCompact donor="Martin" amount="5" />
                <LatestDonationCompact donor="Lewis" amount="15" />
                <LatestDonationCompact donor="devox123" amount="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[150px]"></div>
      <Footer></Footer>
    </div>
  );
};

export default NewyorkAnnualCampaign;
