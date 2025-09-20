import Link from "next/link";

const CharityCard = (props) => {
  return (
    <>
      <div className="card w-96 bg-[#fbfbfb] shadow-xl">
        <figure>
          <img src={props.image} alt={props.charity} />
        </figure>
        <div className="card-body text-[#646b6e]">
          <h2 className="card-title text-dark">{props.charity}</h2>
          <div className="pb-2"></div>
          <p>{props.mission}</p>
          <div className="pb-4"></div>
          <div className="card-actions justify-end">
            <Link
              href={props.link}
              className="btn border-blue bg-blue normal-case"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default CharityCard;