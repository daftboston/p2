import { useState } from "react"

const Weather = ({data,grades}) =>  {

    const [ isFar, setIsFar ] = useState( true )

    
    


    return (
<div className="content"> 

    
    <div className="card">

    <div className="left ">
         <h1 className="temp" >{ isFar?Math.trunc([grades]): Math.trunc([(grades*9/5)+32])}{ isFar ? " C" : " F" } °</h1>
         <h4> {data?.weather?.[0].main}</h4>  
         <h3 className="country">{data.name},{data.sys?.country}</h3>
        
    </div>   

    <div>
    <img className="icon" src={`/icons/${data.weather?.[0].icon}.png`} alt="icons"/>
   
    
   <h4>{data.weather?.[0].description}</h4>


    </div>
    </div> 

    
  
    <button onClick={()=>setIsFar(!isFar)}>Cambiar a F°</button>
    
</div>
)
}
export default Weather