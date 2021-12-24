import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import AutoComplete from './components/AutoComplete/AutoComplete';
import Table from './components/Table/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    setFilterData(makeFilterProducts(allData))
  }, [searchTitle]);


  const fetchData = async () => {
    const result = await (await axios.get('http://localhost:3001/products')).data;
    setAllData(result);

  }

  const handleSearchTitle = (e) => {
    setSearchTitle(e);
    if (e.length > 3) {
      setTimeout(() => {
        const FilterByTitle = makeFilterProducts(allData);
        setFilterData(FilterByTitle);
      }, 300);
    }
    // console.log(e);
  }


  const makeFilterProducts = (array) => {
    return array.filter((item) => {
      return item.title.toLowerCase().includes(searchTitle.toLowerCase());
    })
  }
  return (
    <div className="App h-100">
      <div className='d-flex h-100'>
        <div className='sidebar h-100'>
          <Sidebar />
        </div>
        <div className='flex-grow-1 flex-column w-100'>
          <div className='sticky-top'>
            <AutoComplete getSearchTitle={handleSearchTitle} />
          </div>
          <div className='flex-grow-1 p-2' style={{ msOverflowY: 'auto' }}>
            <Table Products={filterData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
