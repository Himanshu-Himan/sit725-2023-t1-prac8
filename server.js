const express = require("express");
const app = express();
const port = process.env.port || 3000;
const mongoose = require("mongoose");

const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static("public"));

mongoose
  .connect(
    "mongodb+srv://Himan:1234@sit314.f2imupu.mongodb.net/SIT725_Week7",
    {}
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const messageRoutes = require("./controller/routes");
app.use("/messages", messageRoutes);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(port, ()=>{
  console.log('express server started');
});