import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./Infobox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Infobox({info}){
    let HOT = "https://images.unsplash.com/photo-1496347315686-5f274d046ccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90fGVufDB8fDB8fHww"
    let COLD = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
    let RAIN = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
    return(
    <div className="Infobox">
    <h3 style={{color: "white"}}>Weather Info</h3>
    <div className="Weather">
    <Card sx={{ maxWidth: 345,borderRadius:5 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 78 ? RAIN : info.temp < 20 ? COLD : HOT}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 78 ? <ThunderstormIcon/> : info.temp < 20 ? <AcUnitIcon/> : <LocalFireDepartmentIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
               <div>Temperature : {info.temp}</div>
               <div>Temp-Min : {info.tempMin}</div>
               <div>Temp-Max : {info.tempMax}</div>
               <div>Humidity : {info.humidity}</div>
               <div>The weather here is {info.weather} and feels like {info.feelsLike}</div>
            </Typography>
        </CardContent>
    </Card>
    </div>

    </div>
    )

}