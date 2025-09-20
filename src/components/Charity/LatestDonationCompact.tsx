const LatestDonationCompact = (props) => {
  let donorName = props.donor;
  let amount = props.amount;

  return (
    <>
      <div className="flex min-h-[75px] w-11/12 flex-row items-center shadow rounded-md">
        <div className="ml-4">
          <svg
            className="inline h-9 w-9 text-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          &nbsp;&nbsp;&nbsp;
          <span className="text-[#383f46] font-medium">{donorName}</span>&nbsp;
          <span className="text-gray">•</span>&nbsp;
          <span className="text-sm text-gray text-right">${amount}</span>
        </div>
      </div>
    </>
  );
}
 
export default LatestDonationCompact;