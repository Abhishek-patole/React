import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-screen h-screen flex items-center justify-center transition-all duration-500" style={{ backgroundColor: color }}>
      <div className="bg-white p-6 rounded-lg shadow-xl flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => setColor("red")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        
        <button 
          onClick={() => setColor("blue")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        
        <button 
          onClick={() => setColor("green")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        
        <button 
          onClick={() => setColor("white")}
          className="px-6 py-3 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border"
          style={{ backgroundColor: "white" }}
        >
          White
        </button>
        
        <button 
          onClick={() => setColor("black")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
        
        <button 
          onClick={() => setColor("Orange")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "Orange" }}
        >
          Orange
        </button>
        
        <button 
          onClick={() => setColor("yellow")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        
        <button 
          onClick={() => setColor("purple")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        
        <button 
          onClick={() => setColor("pink")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
