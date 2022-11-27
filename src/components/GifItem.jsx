import React from "react";

const GifItem = ({ title, url, id }) => {
  return (
    <div className="col-md-3 col-sm-6 col-10 mb-4  animate__animated animate__fadeIn">
      <div className="card h-100">
        <img className="card-img-top" src={url} alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
};

export { GifItem };
