import styles from './Dashboard.module.css'
import React from "react";
// import Chart from "react-apexcharts";
// import { fetchData } from '../../API/fetch';
import Piechart from '../Piechart'
import Barchart from '../Barchart'
import Areachart from '../Areachart'
import Heatmap from '../Heatmap'


function App() {
  // const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   const getData = async () => {
  //     const fetchedData = await fetchData();
  //     setData(fetchedData);
  //   };
    
  //   getData();
  // }, []);
  
  // const divisi = [...new Set(data.map(item => item.divisi))];
  // const seriesData = divisi.map(divisi => data.filter(item => item.divisi === divisi).length);

  // const options = {
  //   chart: {
  //     type: "bar",
  //     stacked: false,
  //     zoom: { enabled: false },
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //       barHeight: "80%",
  //     },
  //   },
  //   colors: ["#875BF7"],
  //   stroke: { show: true, width: 1 },
  //   fill: { opacity: 1 },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   xaxis: {
  //     categories: divisi,
  //   },
  // };



  return (
  <div className={styles.App}>
    <div className={styles.row}>
      <div >
      <Piechart />
      </div>
      <div>
      <Barchart/>
      </div>
      <div>
      <Areachart/>
      </div>
      <div>
      <Heatmap/>
      </div>

    </div>
  </div>
);
}

export default App;