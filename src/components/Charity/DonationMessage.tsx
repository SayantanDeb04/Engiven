const DonationComment = (props) => {
  let donorName = props.donor;
  let amount = props.amount;
  let message = props.message;

  return (
    <>
      <div className="bg-[#fafafa] flex min-h-[150px] flex-col rounded-md shadow">
        <div className="top flex flex-1 flex-row items-center pt-6">
          <div className="icon ml-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E3ECFF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="h-9 w-9 text-blue"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M16 6.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.822-.017l-2.918-2.94a2.281 2.281 0 0 1 0-3.214a2.277 2.277 0 0 1 3.232 0L12 4.78l.106-.107A2.276 2.276 0 0 1 16 6.28Z" />
                  <path
                    stroke-linecap="round"
                    d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15"
                  />
                  <path
                    stroke-linecap="round"
                    d="m18 16l.858-.858a.484.484 0 0 0 .142-.343v0a.485.485 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15"
                  />
                  <path
                    stroke-linecap="round"
                    d="m6 16l-.858-.858A.485.485 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="donor-info ml-4 flex flex-row">
            <span className="donor-name font-medium text-[#1e232a]">
              {donorName}
            </span>
            &nbsp;
            <span className="donor-amount text-gray">•&nbsp;${amount}</span>
          </div>
        </div>
        <div className="bottom mx-20 mt-4 flex-1 pb-8 text-[#646b6e]">
          {message}
        </div>
      </div>
    </>
  );
};

export default DonationComment;
