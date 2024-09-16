import './App.css';
import Search from './components/Search';
import Card from './components/Card';
import { api, appid } from './api';
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function App() {
  const [data, setData]= useState({});

  const fetchData= async (city)=> {
    const res= await api.get(`?q=${city}&appid=${appid}&units=metric`)    
    setData(res.data);    
    
  }
  useEffect(()=> {
    fetchData('Yangon');
  }, [])

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="w-full min-vh-100 justify-content-center d-flex align-items-center flex-column">
        <h1 className=' text-dark fw-bold fs-1 text-uppercase'>Weather App</h1>
        <div className='bg-light shadow-lg gap-4 d-flex flex-column align-items-center py-5' style={{'minWidth': '500px'}} >
          <Search fetchData= {fetchData}/>
          <p>Current time in Myanmar:</p>
          <Clock value={value} />
          <Card data= {data} />
        </div>
      </div>
    </>
  );
}

export default App;
