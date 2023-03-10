const Weather = ({data}) =>  {
    return (
<div className="target">
    <h1>app clima</h1>
    <h1>pais : {data.base}</h1>
    <div>
       <img  src="/m3.jpg" alt="icons"/>
    </div>
</div>
)
}
export default Weather