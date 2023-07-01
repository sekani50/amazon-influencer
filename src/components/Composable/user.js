import React from "react";
import Chart from "react-apexcharts";

const CircularChart = () => {
  var options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["User+"],
  };

  const series = [70];
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        width="99%"
        height="350"
      />
    </div>
  );
};

export default CircularChart;
