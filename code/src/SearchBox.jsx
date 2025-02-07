import.meta.env.VITE_API_KEY
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateweather}){
    // console.log(API_KEY)
    let [city,setcity] = useState("");
    let [error,seterror] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY1 = "8043346f374078291dd7c6e4b898ab84";
    
    let getWeather = async ()=>{
        try{
            let data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY1}&units=metric`);
        let jsondata = await data.json();
        // console.log(jsondata);
        let result = {
            city: city,
            temp: jsondata.main.temp,
            tempMin: jsondata.main.temp_min,
            tempMax: jsondata.main.temp_max,
            humidity : jsondata.main.humidity,
            feelsLike: jsondata.main.feels_like,
            weather: jsondata.weather[0].description,
        }
        console.log(result);
        seterror(false);
        return result;
        } catch(err){
            throw err;
        }
        
    }

    let handleChange = (event)=>{
        setcity(event.target.value);

    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
        // console.log(city);
        setcity("");
        let data = await getWeather();
        updateweather(data);
            
        } catch(err){
            seterror(true);
        }
        
    }

    return(
    <div className="container">
        <form onSubmit={handleSubmit}>
        <label htmlFor="city" style={{color : "white"}}><b>Search For City:</b></label>
        <br/><br>
        </br>
        <TextField id="city" label="City name" variant="outlined" value={city} onChange={handleChange} style={{backgroundColor: "white"}}/>
        <br/><br/>
        <Button type="submit" endIcon={<SendIcon />} variant="contained" >Send</Button>
        </form> 
        {error && <p style={{color:"red"}}>No such place found</p>}  
    </div>
    )
}