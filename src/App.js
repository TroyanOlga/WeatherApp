import React, {useState, useEffect} from 'react';
import WeatherCard from './components/weatherCard/component';
import weatherCategories from './weatherCategories.json';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const weatherText = 'Mostly Sunny';
    const result = Object.values(weatherCategories).filter((element) => {
      return element.weatherText.find((text) => text === weatherText) === weatherText;
    })
    setData(result[0].name);
  }, []);
  return (
    <div className="App">
      <WeatherCard temp={-40} condition={data}/>
      <WeatherCard temp={20} condition="Haze"/>
      <WeatherCard temp={12} condition="Drizzle"/>
    </div>
  );
}

export default App;
