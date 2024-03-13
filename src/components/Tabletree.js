import '../index.css';
import React, { useState, useEffect } from "react";
import { fetchData } from "../API/fetch";
import { DataGrid } from '@mui/x-data-grid';

function TreeTable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);


  const divisi = [...new Set(data.map(item => item.divisi))];
  const rows = divisi.map((divisi, index) => ({
    id: index,
    division: divisi,
    count: data.filter(item => item.divisi === divisi).length,
  }));
  
  const columns = [
    { field: 'division', headerName: 'Division', flex: 1, headerClassName: 'custom-header' },
    { field: 'count', headerName: 'Count', flex: 1, headerClassName: 'custom-header' },
  ];
  

  const CustomTreeButton = ({ id, onClick, isOpen }) => (
    <button type="button" onClick={() => onClick(id)}>
      {isOpen ? '-' : '+'}
    </button>
  );

  return (
    <div className="app">
      <div className="row">
        <div className="table-chart">
          <h2>Tree Table Chart</h2>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              components={{
                Toolbar: () => null, 
                TreeButton: CustomTreeButton, 
              }}
              autoHeight
              isRowSelectable={false} 
              hideFooterSelectedRowCount 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreeTable;
