import { useEffect, useState } from 'react'
import axios from "axios"
import Weather from './components/Weather'

import './App.css'




function App() {

  useEffect (()=>{
  axios
  .get (`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
  .then(resp => console.log(resp.data))
  .catch ( error => console.error(error) )
  },[])

  


  const [lat, setLat]=useState( 4.6775397)
  const [long, setLong] = useState (-74.1122391)




  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


  return (
    <div className="App">

      <Weather></Weather>


        
    
    </div>
  )
}

export default App


