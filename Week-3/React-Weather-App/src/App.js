import React,{useState,useEffect} from 'react';
import './App.css';
import Weather from './Weather-img.jpg';

function App(){
  
  const [apiData, setApiData] = useState({})
  const [getState, setGetState] = useState('')
  const [state, setState] = useState('tamilnadu')
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=c3c16cd01bfa7473bb8a03d996fc2933`; 
  


  useEffect(() => {
    fetch(apiURL)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setApiData(data);
    })
  }, [apiURL]);

  const search = (event)=>{
    setGetState(event.target.value)
  }

  const submit = ()=>{
    setState(getState)
  }

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };
  
    return (
      <div className="App">
        <header className="d-flex  justify-content-center align-items-center">
          <h2>React Weather App</h2>
        </header>
        <div className="card text-white">

          <img src={Weather} className="card-img" alt="..."/>

          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex form-item">
              <label htmlFor="location-name" className="col-form-label label"> Enter Location :</label>
              <input type="text" id="location-name" className="search d-flex" onChange={search} value={getState} placeholder="Search"/>
              <i onClick={submit} className="fas fa-search bg-secondary "></i>
            </div>
            <div className="card-body mx-auto">
              {apiData.main ? (
                <div className="text-center">

                  <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} alt="weather status icon" className="weather-icon"/>
                  <p>{' '}<strong>{apiData.weather[0].main}</strong> </p>

                  <p className="card-text city-name"><i className="fas fa-map-marker-alt"></i>{' '}
                    <strong>{apiData.name}</strong></p>
                  <p className="card-text country-name">{apiData.sys.country}</p>
      
                  <div className="col-md-6 mx-auto">
                    <p className="card-text temperature ">{kelvinToFarenheit(apiData.main.temp)}°c</p>
                    <p className="card-text wind"><i className="fas fa-wind"></i>{apiData.wind.speed}km/hr</p>
                  </div>

                </div>
              ):(<h3>Loading...</h3>)}
            </div>
          </div>
        </div>
        <footer className="footer">
          <code>Created by{' '}<a href="https://www.github.com/Haritha101-19.com" target="none">Haritha</a>{' '}using React</code>
        </footer>
      </div>
    )


};


  


export default App;
