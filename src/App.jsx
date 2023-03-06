import { useEffect, useState } from 'react'
import Weather from './components/Weather'

import './App.css'




function App() {

  useEffect (()=>{
  axios
  .get ("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
  .then(resp => console.log(resp.data))
  .catch ( error => console.error(error) )
  },[])

 

  const [index, setindex]=useState(0)




  return (
    <div className="App">

      <Weather></Weather>


        
    
    </div>
  )
}

export default App


