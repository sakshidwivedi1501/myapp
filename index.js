const express = require("express")
var app = express()
app.get("/",function(request,response){
response.send("Hello Sakshi, How are you!")
})
app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});
