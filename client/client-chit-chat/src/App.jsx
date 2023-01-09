import "./App.css";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <div className="App">
      <div>Hello World!</div>
    </div>
  );
}

export default App;
