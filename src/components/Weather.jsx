const Weather = ({data}) =>  {
    return (
<div>
    <h1>app clima</h1>
    <h1>pais : {data.base}</h1>
    <div>
       <img src="/01d.png" alt="icons"/>
    </div>
</div>
)
}
export default Weather