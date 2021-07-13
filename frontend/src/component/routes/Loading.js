import React from "react";

export const Loading = () => {
  return (
    <div>
      <span>
        <i className="fa fa-spinner fa-spin"></i>Loading
      </span>
    </div>
  );
};

export const Error = ({ value }) => {
  console.log(value);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};
