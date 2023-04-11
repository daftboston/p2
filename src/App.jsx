import { useEffect, useState } from 'react'
import axios from "axios"
import Weather from './components/Weather'

import './App.css'




function App() {

  const [location, setLocation]=useState({})
  const [grades, setGrades]=useState("")

  

  

  useEffect (()=>{
  
    navigator.geolocation.getCurrentPosition ( position => {
 
   const lat = position.coords.latitude
   console.log(lat);

   const long = position.coords.longitude
   console.log(long);






  axios
  .get (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2fbf6df31d602a98a70f4bf8194d7b10&lang=sp, es&units=metric`)
  .then(resp => {console.log(resp.data)
    
    setLocation(resp.data)
  setGrades(resp.data.main?.temp)
  console.log(resp.data.main?.temp)})
  .catch ( error => console.error(error) )
    })
  },[])
 
 

  
  


  return (
    <div className="App">

      <Weather data={location} grades={grades}>  </Weather>


        
    
    </div>
  )
}

export default App


