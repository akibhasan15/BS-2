const express = require('express');
const os = require('os');
const app = express();
const axios=require('axios')

app.get('/api/hello', (req, res) => {
const api=process.env.KEY;
const value=`https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&APPID=${api}`;  
   
axios.get(value).then(response => {
  // console.log('API response',response.data);
    res.json({ 
    "hostname": os.hostname(),
    "datetime":new Date(),
    "version":"1.0.0",
    "weather":{
     "dhaka":{
       "temperature":response.data.main.temp,
     "temp_unit":"C"               

     }  }
  });
})
})

app.get('/api/health',(req,res)=>{
  res.json({
    "CPU_Usage":process.cpuUsage(),
    "Memory_Usage":process.memoryUsage(),
    "Uptime":process.uptime()
  });
})
// console.log(process.memoryUsage);
const port = 3100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  