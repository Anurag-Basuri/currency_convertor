import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmt, setConvertedAmt] = useState(0);

    const { rates, loading, error } = useCurrencyInfo(apiKey);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmt(amount);
        setAmount(convertedAmt);
    };

    const convert = () => {
        if (rates) {
            setConvertedAmt(((amount / rates[from]) * rates[to]).toFixed(2));
        }
    };

    if (loading)
        return <div className="text-center">Loading currency rates...</div>;
    if (error)
        return <div className="text-center text-red-500">Error: {error}</div>;

    const options = Object.keys(rates);

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
                <source src="/watermarked_preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <div className="w-full mb-1">
                    <InputBox
                        CurrencyOptions={options}
                        label="From"
                        inputDisabled={false}
                        amount={amount}
                        onAmountChange={setAmount}
                        currency={from}
                        onCurrencyChange={setFrom}
                    />
                </div>
                <div className="relative w-full h-1">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-800 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        Swap
                    </button>
                </div>
                <div className="w-full mb-1">
                    <InputBox
                        CurrencyOptions={options}
                        label="To"
                        amount={convertedAmt}
                        inputDisabled={true}
                        currency={to}
                        onCurrencyChange={setTo}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 rounded-lg"
                    onClick={convert}
                >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </div>
        </div>
    );
}

export default App;
