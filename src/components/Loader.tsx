import React from "react";
import { Spin } from "antd";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
