import { useState, useEffect } from "react";
import axios from "axios";
import Chart from 'react-apexcharts';
import { fetchData } from "../API/fetch";

const Cobacoba = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const data = await fetchData();
        setData(data);
      };
  
      getData();
    }, []);

    const divisi = [...new Set(data.map(item => item.divisi))];
  const seriesData = divisi.map(divisi => data.filter(item => item.divisi === divisi).length);

  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: divisi
    }
  };

  const series = [{
    name: 'jumlah',
    data: seriesData
  }];

  return (
    <div>
      <Chart options={options} series={series} type="bar" width={500} height={320} />
    </div>
  );
}
export default Cobacoba;