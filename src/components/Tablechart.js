import '../index.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchData } from "../API/fetch";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Tablechart() {
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

  return (
    <div className="app">
      <div className="row">
        <div className="table-chart">
          <h2>Table Chart</h2>
          <TableContainer  component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: '#875BF7', color: 'white' }}>Division</TableCell>
                  <TableCell style={{ backgroundColor: '#875BF7', color: 'white' }}>Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: '#ffff', color: 'black' }}>
                {divisi.map((divisi, index) => (
                  <TableRow key={index}>
                    <TableCell>{divisi}</TableCell>
                    <TableCell>{seriesData[index]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button onClick={() => navigate('/nineth')} className="table-btn">
            <span>
              Table tree
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tablechart;
