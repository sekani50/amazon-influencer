import React from "react";
import Chart from "react-apexcharts";

const UserChart = () => {
  var options = {
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    
      ],
    },
  };
  const series = [
    {
      name: "Users",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },

  ];
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="50%"
        height="320"
      />
    </div>
  );
};

export default UserChart;
