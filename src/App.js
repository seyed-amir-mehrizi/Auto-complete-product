import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import AutoComplete from './components/AutoComplete/AutoComplete';
import Table from './components/Table/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination/Pagination';
function App() {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, SetProductsPerPage] = useState(100);

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
  }

  const makeFilterProducts = (array) => {
    return array.filter((item) => {
      return item.title.toLowerCase().includes(searchTitle.toLowerCase());
    })
  }



  //pagination logic

  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = filterData.slice(indexOfFirstProducts, indexOfLastProducts)

  const paginate = (number) =>{
    setCurrentPage(number);
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
            <Table Products={currentProducts} />
            <Pagination paginate={paginate} currentPage={currentPage} totalProducts={filterData.length} productsPerPage={productsPerPage}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
