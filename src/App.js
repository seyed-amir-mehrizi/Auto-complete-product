import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import AutoComplete from './components/AutoComplete/AutoComplete';
import Table from './components/Table/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
const [allData , setAllData] = useState([]);
const [searchTitle , setSearchTitle] = useState('');

  useEffect(() => {
    fetchData();
  },[])


  const fetchData = async () => {
    const result = await (await axios.get('http://localhost:3001/products')).data;
    setAllData(result);
    
  }

  const handleSearchTitle = (e) =>{
    setSearchTitle(e);
    console.log(e);
  }
  return (
    <div className="App h-100">
      <div className='d-flex h-100'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='flex-grow-1 flex-column w-100'>
          <div className='sticky-top'>
            <AutoComplete getSearchTitle={handleSearchTitle}/>
          </div>
          <div className='flex-grow-1 p-2' style={{ msOverflowY: 'auto' }}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
