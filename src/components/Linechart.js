import '../index.css';
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchData } from "../API/fetch";

function Linechart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  const divisi = [...new Set(data.map(item => item.divisi))];
  const seriesData = divisi.map(divisi => data.filter(item => item.divisi === divisi).length);




  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#875BF7", "#F79009", "#2970FF"],
    stroke: {
      curve: "straight",
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "11 Feb",
        "12 Feb",
        "13 Feb",
        "14 Feb",
        "15 Feb",
        "16 Feb",
        "17 Feb",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h2>Line Chart</h2>
          <Chart
            options={options}
            series={[{ data: seriesData }]}
            type="area" 
            height="350px"
            width="600px"
          />
        </div>
      </div>
    </div>
  );
}

export default Linechart;
