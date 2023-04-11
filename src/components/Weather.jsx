import { useState } from "react"

const Weather = ({data,grades}) =>  {

    const [ isFar, setIsFar ] = useState( true )

    const convert =()=>{
        (grades * 9/5) + 32

    }



    return (
<div className="card">         
    <h1>pais : {data.sys?.country}</h1>
    <h3>ubicacion: {data.name}</h3>
    <img src="/icons/01d.png" alt="icons"/>
    <h3>temperature: {isFar?[grades]:[(grades*9/5)+32]} °</h3>
    <h4>descripcion: {data?.weather?.[0].main}</h4>
    <h4>{data.weather?.[0].description}</h4>
    <button onClick={()=>setIsFar(!isFar)}>convert</button>
    
</div>
)
}
export default Weather