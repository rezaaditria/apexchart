import '../index.css';
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useNavigate } from 'react-router-dom';
import { fetchData } from "../API/fetch";

function Scatterplot() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  const seriesData = data.map(item => ({
    x: item.divisi,
    y: item.umur, 
    
  }));

  const options = {
    chart: {
      type: "scatter", 
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      tickAmount: 10,
      type: 'divisi', 
      labels: {
        rotate: 0, 
      },
    },
    yaxis: {
      tickAmount: 7,
      type: 'options'
    },
    markers: {
      size: 10, // Adjust marker size as needed
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h2>Scatterplot Chart</h2>  
          <Chart
            options={options}
            series={[{ data: seriesData }]}
            type="scatter" 
            height="350px"
            width="600px"
          />
          <button onClick={() => navigate('/Eight')} className="ui-btn">
            <span>
              Tablechart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scatterplot;
