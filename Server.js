
const express = require("express");
const app = express ();
const path = require('path')

app.use(function (req, res, next) {
    var date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
  
    if (day > 0 && day < 6 && hour > 9 && hour < 17) {
      next();
    } else {
      res.send("This website works only on weekdays and work time");
    }
  });
  
app.use(express.static(path.join(__dirname,'public')))
const port = process.env.port || 5000;
app.listen(port , (err)=>err? console.log(error): console.log(`server is runing on port ${port}`));
