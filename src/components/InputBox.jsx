import React from "react";
import { useId } from "react";
import PropTypes from "prop-types";

function InputBox({ className = "", CurrencyOptions = [], label }) {
  const inputId = useId();
  const selectId = useId();

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        {/* Search Input */}
        <div className="w-1/2">
          <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
          <input
            id={inputId}
            className="outline-1 w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
          />
        </div>

        {/* Currency Selector */}
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <label
            htmlFor={selectId}
            className="text-black/40 mb-2 w-full label label-text"
          >
            Currency Type
          </label>
          <select
            className="select max-w-sm bg-gray-200 cursor-pointer rounded-none"
            id={selectId}
            aria-label="Currency Selector"
          >
            {CurrencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
            <optgroup label="Frontend Technologies">
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="nodejs">Node.js</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
