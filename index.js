const express = require("express")
const logger = require('./logger');

var app = express()
// Middleware to log all requests
app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });
  next();
})

app.get("/",function(request,response){
response.send("Hello , How ae u!")
})
app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
