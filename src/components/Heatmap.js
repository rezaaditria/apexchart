import '../index.css';
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchData } from "../API/fetch";

function Heatmap() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  // Modify data processing to group by 'divisi' and 'jenis_kelamin'
  const divisiAndGender = data.reduce((acc, item) => {
    const key = `${item.divisi}-${item.jenis_kelamin}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  // Extract unique 'divisi' and 'jenis_kelamin'
  const divisi = [...new Set(data.map(item => item.divisi))];
  const jenisKelamin = [...new Set(data.map(item => item.jenis_kelamin))];

  // Create series data based on divisi and jenis_kelamin
  const seriesData = jenisKelamin.map(jk => {
    return {
      name: jk,
      data: divisi.map(div => divisiAndGender[`${div}-${jk}`] || 0),
    };
  });

  const options = {
    chart: {
      type: "heatmap",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: 1,
              to: Math.max(...seriesData.flatMap(item => item.data)),
              color: "#875BF7",
            },
          ],
        },
      },
    },
    xaxis: {
      categories: divisi,
    },
    yaxis: {
      categories: jenisKelamin,
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h2>Heatmap</h2>
          <Chart
            options={options}
            series={seriesData}
            type="heatmap"
            height="350px"
            width="600px"
          />
        </div>
      </div>
    </div>
  );
}

export default Heatmap;
