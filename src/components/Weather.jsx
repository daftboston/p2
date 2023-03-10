const Weather = ({data}) =>  {
    return (
<div>
    <h1>app clima</h1>
    <h1>pais : {data.base}</h1>
    <img src="/icons/01d.png" alt="icons"/>
</div>
)
}
export default Weather