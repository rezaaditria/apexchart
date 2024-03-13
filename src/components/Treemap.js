import '../index.css';
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchData } from "../API/fetch";

function TreemapChart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  const categories = [...new Set(data.map(item => item.divisi))];
  const seriesData = categories.map(category => ({
    x: category,
    y: data.filter(item => item.divisi === category).length,
  }));

  const options = {
    chart: {
      type: "treemap",
      zoom: { enabled: false },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
    colors: ["#875BF7"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      categories: categories,
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h2>Treemap Chart</h2>
          <Chart
            options={options}
            series={[{ data: seriesData }]}
            type="treemap"
            height={380}
          />
        </div>
      </div>
    </div>
  );
}

export default TreemapChart;
