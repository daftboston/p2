const Weather = ({data}) =>  {
    return (
<div>
    <h1>app clima</h1>
    <h1>pais : {data.base}</h1>
    <img src="/icons/01d.png" alt="icons"/>
    <h3>temperature: {data.main?.temp}</h3>
    <h4>descripcion:{data.weather[0]} </h4>
</div>
)
}
export default Weather