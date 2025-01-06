import { useState } from "react";
import { InputBox } from "./components";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="public\watermarked_preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <div className="w-full mb-1">
          <InputBox
            CurrencyOptions={["Saab", "Volvo", "BMW", "usd", "inr"]}
            label="From"
            inputDisabled={false}
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            currency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
          />
        </div>
        <div className="relative w-full h-1">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-800 text-white px-2 py-0.5"
            // onClick={}
          >
            swap
          </button>
        </div>
        <div className="w-full mb-1">
          <InputBox
            CurrencyOptions={["Saab", "Volvo", "BMW", "usd", "inr"]}
            label="To"
            amount={convertedAmt}
            inputDisabled={true}
            currency={to}
            onCurrencyChange={(currency) => setTo(currency)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded-lg"
        >
          Convert
          {/* {from.toUpperCase()} to {to.toUpperCase()} */}
        </button>
      </div>
    </div>
  );
}

export default App;
