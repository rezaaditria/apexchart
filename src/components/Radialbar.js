import '../index.css';
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useNavigate } from 'react-router-dom';
import { fetchData } from "../API/fetch";

function Radialbar() {
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
      type: "radialBar",
      offsetY:-20,
      sparkline:{
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle:-90,
        endAngle:90,
        track: {
          background: "#D0D5DD",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: false,
          },
        },
        dataLabels: {
          total: {
            show: false,
            label: 'Total',
            formatter: function (w) {
              return seriesData.reduce((a, b) => a + b, 0);
            }
          },
          value: {
            offsetY: -50,
            fontSize: "22px",
          },
          // total: {
          //   color: "#000",
          // }
        }
      }
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    labels: divisi, 
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h2>Radialbar Chart</h2>
          <Chart
            options={options}
            series={seriesData}
            type="radialBar" 
            height="350px"
            width="600px"
          />
          <button onClick={() => navigate('/seventh')} className="ui-btn">
            <span>
              scatterpoint
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Radialbar;
