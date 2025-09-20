import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import LatestDonationCompact from "../../components/Charity/LatestDonationCompact";
import DonationMessage from "../../components/Charity/DonationMessage";
import DonateWidget from "../../components/Charity/DonateWidget";
import { useState } from "react";

const CharityTheSmallWorld = () => {
  let [donateWidget, setDonateWidget] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[50px]"></div>
      <div className="flex min-h-screen flex-row space-x-20 px-16">
        <div className="basis-2/3">
          <div className="h-full w-full px-2 py-4">
            <h1 className="pb-8 font-eudoxus text-4xl font-bold text-[#25353d]">
              <span className="text-gradient"></span> The Small World
            </h1>
            <img
              src="/the-small-world.webp"
              alt="the-small-world.webp"
              className="w-full rounded-md"
            />
            <div className="h-[50px]"></div>
            <span className="text-gradient font-eudoxus text-3xl font-bold text-[#25353d]">
              Our Mission
            </span>
            <div className="h-[35px]"></div>
            <div className="font-inter text-[#646b6e]">
              <p>
                Please help raise $5,000 to support 40 girls from rural villages
                of Nepal with housing and education support each year.
              </p>
              <br />
              <p>
                The Small World's mission is to empower girls, women and
                communities in the Himalayan regions of Nepal. The organization
                supports girls from small, remote communities to provide girls
                resources and support they need to complete their education.
                Every year, the Girls Dorm for Higher Education in Salleri,
                Nepal serves 40 girls in grades 11 and 12. The girls come from
                some of the most remote villages in Nepal's Solukhumbu region
                and travel to reside at the dorm to access these grade levels of
                school, which are unavailable in their home villages. In the
                areas we work, up to seven out of 10 girls drop out of school
                after the 10th grade. The dorm provides a safe space for the
                girls to live and learn together. In addition to their
                traditional education, girls residing at the dorm take extra
                classes, such as computer education, to prepare them for
                potential employment in the future.
              </p>
              <br />
              <p>
                Funding received for this project will cover the costs
                associated with sending 40 girls to grades 11 and 12, including
                their lodging, bedding, school uniforms, books, supplies and
                tuition, as well as health care and access to empowerment
                programming. Operational costs include staff salary for the
                resident chaperone (a graduate of the program), and a teacher,
                in addition to fuel and power.
              </p>
              <br />

              <p>
                Project costs per girl are as follows: School tuition fees =
                $480/year Stationary and books = $90/year Health Care =
                $150/year Two sets of School Uniforms and One Pair of Shoes =
                $70/year Mattress, blanket, pillow and bed sheets = $35/year
                Kitchen Utensils = $45/year
              </p>
              <br />
              <p>
                We believe the investment we make together on girls education is
                the best investment to break down the cycle of poverty in the
                area, because when women have access to a quality education,
                they tend to be healthier, participate more in the formal labor
                market, earn higher incomes, have fewer children, marry at a
                later age, and enable better health care and education for their
                children, should they choose to become mothers. All these
                factors combined can help uplift households, communities, and
                nations out of poverty.
              </p>
            </div>
            <div className="pt-16">
              <span className="text-gradient font-eudoxus text-3xl font-bold">
                Messages from the Donors
              </span>
              <div className="pb-16"></div>
              <div className="flex flex-col space-y-6">
                <DonationMessage
                  donor="Richard Brooks"
                  amount="10"
                  message="I like this charity's mission. The whole world should aim for better access to education for women. God bless."
                ></DonationMessage>
                <DonationMessage
                  donor="Steve Garret"
                  amount="15"
                  message="I am glad to donate to this amazing charity. I heard about them in my local television program and I must say that I'm impressed by their mission. More power to you!"
                ></DonationMessage>
                <DonationMessage
                  donor="John Melon"
                  amount="30"
                  message="I hope my humble donation can help make a difference in this world. I'm looking forward to sharing this charity with my friends as well."
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
              <span className="text-gradient text-xl font-bold">$1,250</span>
              &nbsp;&nbsp;
              <span className="text-sm text-[#7d8386]">
                raised of $5,000 goal
              </span>
            </span>
            <div className="pt-2"></div>
            <progress
              className="progress progress-success bg-[#E6F6EF]"
              value="25"
              max="100"
            ></progress>
            <div className="pb-2"></div>
            <span className="font-inter text-sm text-gray">
              7 donations raised
            </span>
            <div className="pb-16"></div>
            <button
              onClick={() => setDonateWidget(!donateWidget)}
              className="btn w-full rounded-md border-blue bg-blue text-white hover:btn-primary"
            >
              Donate
            </button>
            {donateWidget && <DonateWidget />}
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
                <LatestDonationCompact donor="Carboxy" amount="125" />
                <LatestDonationCompact donor="Gary" amount="10" />
                <LatestDonationCompact donor="Steve Jobs" amount="15" />
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

export default CharityTheSmallWorld;
