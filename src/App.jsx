import { useState } from "react";
import { InputBox } from "./components";
import "./App.css";

function App() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <div className="w-full mb-1">
          <InputBox
            CurrencyOptions={["Saab", "Volvo", "BMW"]}
            label={"From"}
          />
        </div>
      <div className="w-full mb-1">
          <InputBox
            CurrencyOptions={["Saab", "Volvo", "BMW"]}
            label={"To"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
