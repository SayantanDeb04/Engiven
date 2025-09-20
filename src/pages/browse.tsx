import CharityCard from "../components/Browse/CharityCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className="pl-20 pt-20">
        <div>
          <h1 className="font-eudoxus text-3xl font-bold text-dark">
            Recommended charities for you
          </h1>
        </div>
        <div className="pt-16"></div>
        <div className="flex flex-row flex-wrap space-x-10">
          <CharityCard
            image="/the-small-world.webp"
            charity="The Small World"
            mission="The Small World's mission is to empower girls, women and communities in the Himalayan regions of Nepal."
            link="/charity/the-small-world"
          />
          <CharityCard
            image="/cleanwater.png"
            charity="Clean Water Wells Project - Desert Communities"
            mission="Installing 10 solar-powered water wells in remote villages of Rajasthan to provide clean drinking water to 2000+ people. Each well will serve 200 people with sustainable water access."
            link="/charity/cleanwater"
          />
          <CharityCard
            image="/OIP.png"
            charity="Flood Relief & Rehabilitation"
            mission="Emergency relief and long-term rehabilitation for flood-affected families in Assam. Providing food, shelter, medical aid, and rebuilding homes for 1000+ displaced families."
            link="/charity/FloodReliefRehabilitation"
          />
        </div>
      </div>
      <div className="h-[200px]"></div>
      <Footer />
    </>
  );
};

export default Browse;
