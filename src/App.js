
import React ,{ useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Checkbox from './components/Checkbox/Checkbox';
import Table from './components/Table/Table';
import Dropdown from './components/Dropdown/Dropdown';
import Pagination from './components/Pagination/Pagination';
import AutoComplete from './components/AutoComplete/AutoComplete'
function App() {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, SetProductsPerPage] = useState(100);
  const [gender, setGender] = useState('male');
  const [isOnSale, setIsOnSale] = useState(false)

  useEffect(() => {
    fetchData();
  }, [])
  useEffect(() => {
    if (searchTitle.length <= 2) {
      setFilterData([]);
    }
    const result = allData.filter((item) => {
      return (item.gender === gender) &&
        (!searchTitle || item.title.toLowerCase().includes(searchTitle.toLowerCase())) &&
        (isOnSale ? Number(item.sale_price.split(' ')[0]) < Number(item.price.split(' ')[0]) : Number(item.sale_price.split(' ')[0]) >= Number(item.price.split(' ')[0]))
    });
    setFilterData(result)

  }, [gender, searchTitle, isOnSale])
  
  const fetchData = async () => {
    try {      
      const result = await (await axios.get('http://localhost:3001/products')).data;
      setAllData(result);
    } catch (error) {
      console.log(error)
    }

  }
  const handleSearchTitle = (e) => {
    setSearchTitle(e);
  }

  //pagination logic

  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = filterData.slice(indexOfFirstProducts, indexOfLastProducts)

  const paginate = (number) => {
    setCurrentPage(number);
  }

  //filtering by the Gender

  const onSelectGender = (gender) => {
    setGender(gender)
  }

  // filtering by checkbox

  const handleChangeSale = (e) => {
    setIsOnSale(e)
    // console.log(e);
  }



  return (
    <div className='h-100'>
      <div className="main-app h-100">
        <div className="d-flex h-100">
          <div className="sidebar p-2">
            <Dropdown handleChangeGender={onSelectGender} />
            <Checkbox handleChangeSale={handleChangeSale} />
          </div>
          <div className="flex-grow-1 d-flex flex-column w-100">
            <div className="sticky-top">
              <AutoComplete getSearchTitle={handleSearchTitle} />
            </div>
            <div className="content-body flex-grow-1 p-2" style={{ overflowY: "auto" }}>
              <Table Products={currentProducts} />
              <Pagination paginate={paginate} currentPage={currentPage} totalProducts={filterData.length} productsPerPage={productsPerPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
