// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
const PORT = 4000;

//Allows data transfer between client and server domains

// eslint-disable-next-line no-undef
const http = require("http").Server(app);
// eslint-disable-next-line no-undef
const cors = require("cors");

app.use(cors());

// eslint-disable-next-line no-undef
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

console.log(socketIO);

//Establishes connection with React app and creates a unique id for each socket
//Will log the ID to the console whenever a user visits the page
//When page is refreshed or exited, socket will fire the disconnect
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
