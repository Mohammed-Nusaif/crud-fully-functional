import { createContext, useState } from 'react';
import './App.css';
import Crud1 from './Components/Crud1';
import data1 from './Components/Data';
import Router1 from './Components/Router1';

const mycrud = createContext();
function App() {
  const [data, setData] = useState([])
  return (
    
    <div className="App">
      <mycrud.Provider value = {[data,setData]}>
         <Router1 />
      </mycrud.Provider>
       
    </div>
  );
}
export {mycrud};
export default App;

