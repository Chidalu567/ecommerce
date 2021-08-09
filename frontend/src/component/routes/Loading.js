import React from "react";
import { Spin } from "antd";

export const Loading = () => {
  // <i className="fa fa-spinner fa-spin"></i>;
  return (
    <div>
      <span>
        <Spin />
        Loading
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
