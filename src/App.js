import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import AutoComplete from './components/AutoComplete/AutoComplete';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App h-100">
      <div className='d-flex h-100'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='flex-grow-1 flex-column w-100'>
          <div className='sticky-top'>
            <AutoComplete />
          </div>
          <div className='flex-grow-1 p-2' style={{msOverflowY:'auto'}}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
