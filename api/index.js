const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const user = require('./response/user.js')

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/userdetails", (req,   res) => {
    res.status(200);
    res.send(user);
});
app.post("/adduser", (req,   res) => {
    res.status(200);
    res.send(user);
});
app.put("/updateuser", (req,   res) => {
    res.status(200);
    res.send(user);
});
app.patch("/deleteuser", (req,   res) => {
    res.status(200);
    res.send(user);
});
server.listen(process.env.PORT || 5000, () => {
  console.log("Listening to port http://localhost:5000");
});