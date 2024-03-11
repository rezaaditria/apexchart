import React, { useState } from 'react';

function Dashboard() {
  const [chart, setChart] = useState([]);

  function handleOnDrag(e, chartTypes) {
    e.dataTransfer.setData("chart Types", chartTypes);
  }

  function handleOnDrop(e) {
    const chartTypes = e.dataTransfer.getData("chart Types");
    console.log("chartTypes: ", chartTypes);
    setChart([...chart, chartTypes]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div className="app">
      <div className="charts">
        <div
          className="chart"
          draggable
          onDragStart={(e) => handleOnDrag(e, "chart A")}
        >
          Chart A
        </div>
        <div
          className="chart"
          draggable
          onDragStart={(e) => handleOnDrag(e, "chart B")}
        >
          Chart B
        </div>
        <div
          className="chart"
          draggable
          onDragStart={(e) => handleOnDrag(e, "chart C")}
        >
          Chart C
        </div>
</div>
        <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {chart.map((chart,index)=> (
          <div className="droppedchart" key={index}>
            {chart}
          </div>
        ))}
        </div>
      </div>
  );
}

export default Dashboard;
