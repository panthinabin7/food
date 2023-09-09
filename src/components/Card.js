import React from "react";

const Card = () => {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
        className="card-img-top"
        alt="..."
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is some Important text</p>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className="m-2 h-100  bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
