import "./App.css";
import "./index.css";
import socketIO from "socket.io-client";
import Home from "./components/Home";
import Chat from "./components/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<Chat socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
