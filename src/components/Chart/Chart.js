import React from "react";
import ChartBar from "./ChatBar";
import "./Chart.css";
const Chart = (props) => {
  return <div className="chart">{props.dataPoints}</div>;
};

export default Chart;
