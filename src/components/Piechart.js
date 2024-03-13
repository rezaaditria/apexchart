import '../index.css';
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchData } from "../API/fetch";

function Piechart() {

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
      width: "80%",
      type: "pie",
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      position: "bottom",
    },
    labels: divisi, // Use divisi for labels in Piechart
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h2>Piechart</h2>
          <Chart
            options={options}
            series={seriesData}
            type="pie"
            height="420px"
            width="600px"
          />
        </div>
      </div>
    </div>
  );
}

export default Piechart;
