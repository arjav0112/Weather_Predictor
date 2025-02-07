import { useState } from "react"
import SearchBox from "./SearchBox"
import Infobox from "./Infobox"
import "./WeatherApp.css"

export default function Weatherapp(){
    let [weather,setweather] = useState({
        city : "Delhi",
        temp: "28.7",
        tempMin: "20.1",
        tempMax: "33.1",
        humidity : "20",
        feelsLike: "24.4",
        weather: "haze",
    }) 

    let updateweather = (result)=>{
        setweather(result)
    }
    return(
        <div className="weatherapp">
            <h2 style={{color: "white"}}>Weather APP</h2>
            <SearchBox updateweather={updateweather}/>
            <Infobox info={weather}/>

        </div>
    )
}