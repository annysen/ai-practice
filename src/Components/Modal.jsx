const Modal = ({ singleData }) => {
  const { tool_name, image_link, integrations, features } = singleData;
  //   const featuresArray = Object.values(features);
  console.log(features);

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {tool_name ? tool_name : "Coming Soon"}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold">Integrations:</h1>
                  {integrations &&
                    integrations.map((i, index) => (
                      <p>
                        {index + 1}. {i}
                      </p>
                    ))}
                </div>
                <div>
                  <h1 className="font-bold">Features:</h1>
                  {features &&
                    Object.values(features).map((f, index) => (
                      <p>
                        {index + 1}. {f.feature_name}
                      </p>
                    ))}
                </div>
              </div>
            </div>
            <figure>
              <img
                className="w-full h-64"
                src={image_link && image_link[0]}
                alt={tool_name}
              />
            </figure>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
