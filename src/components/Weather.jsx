const Weather = ({data}) =>  {
    return (
<div className="card">         
    <h1>pais : {data.sys?.country}</h1>
    <h3>ubicacion: {data.name}</h3>
    <img src="/icons/01d.png" alt="icons"/>
    <h3>temperature: {data.main?.temp} °</h3>
    <h4>descripcion: {data?.weather?.[0].main}</h4>
    <h4>{data.weather?.[0].description}</h4>
</div>
)
}
export default Weather