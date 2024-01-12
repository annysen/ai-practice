const Card = ({ data, getId }) => {
  const { id, name, description, image, features, published_in } = data;
  //   console.log(getId);

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image ? image : null} alt={name} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>{description ? description : "Coming Soon"}</p>
          <>
            {features.map((f, index) => (
              <p key={index}>
                {index + 1}. {f}
              </p>
            ))}
          </>
          <hr className="h-2" />
          <>
            <div className="flex justify-between items-center">
              <span className="flex gap-5 text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <p>{published_in}</p>
              </span>
              <div className="card-actions justify-end">
                <span onClick={() => getId(id)}>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Card;
