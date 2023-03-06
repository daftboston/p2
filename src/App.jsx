import { useEffect, useState } from 'react'
import axios from "axios"
import Weather from './components/Weather'

import './App.css'




function App() {

  const [location, setLocation]=useState({})

  useEffect (()=>{
  axios
  .get (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2fbf6df31d602a98a70f4bf8194d7b10`)
  .then(resp => {console.log(resp.data)
    console.log(resp.data)
    setLocation(resp.data)})
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
  
    /*console.log("Your current position is:");*/
    /*console.log(`Latitude : ${crd.latitude}`);*/
    setLat(crd.latitude)
    /*console.log(`Longitude: ${crd.longitude}`);*/
    setLong(crd.longitude)
    /*console.log(`More or less ${crd.accuracy} meters.`);*/

  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


  return (
    <div className="App">

      <Weather data={location}></Weather>


        
    
    </div>
  )
}

export default App


