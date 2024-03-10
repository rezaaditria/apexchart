import '../index.css';
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useNavigate } from 'react-router-dom';
import { fetchData } from "../API/fetch";

function Areachart() {
  const navigate = useNavigate();
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
      type: "bar",
      stacked: false,
      zoom: { enabled: false },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    colors: ["#875BF7"],
    stroke: { show: true, width: 1 },
    fill: { opacity: 1 },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: divisi,
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h2>Areachart</h2>
          <Chart
            options={options}
            series={[{ data: seriesData }]}
            type="area"
            height="350px"
            width="600px"
          />
          <button onClick={() => navigate('/Second')} className="ui-btn">
            <span>
              Barchart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Areachart;
