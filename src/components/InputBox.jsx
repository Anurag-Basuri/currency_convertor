import { useId } from "react";
import PropTypes from "prop-types";

function InputBox({
  className = "",
  CurrencyOptions = [],
  label = "Amount",
  inputDisabled = false,
  amount = "",
  onAmountChange = () => {},
  currency = "usd",
  onCurrencyChange = () => {},
}) {
  const inputId = useId();
  const selectId = useId();

  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <div className="bg-white p-4 rounded-lg shadow-md text-sm flex w-full max-w-md">
        {/* Amount Input */}
        <div className="w-2/3 pr-2">
          <label
            htmlFor={inputId}
            className="block text-black/60 mb-2 inline-block text-md font-medium"
          >
            {label}
          </label>
          <input
            id={inputId}
            className="w-full border border-blue-400 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            type="number"
            placeholder={`Enter ${label.toLowerCase()}`}
            disabled={inputDisabled}
            value={amount}
            onChange={(e) => {
              onAmountChange(e.target.value);
            }}
          />
        </div>

        {/* Currency Selector */}
        <div className="w-1/3 pl-2">
          <label
            htmlFor={selectId}
            className="block text-black/60 mb-2 text-md font-medium"
          >
            Currency Type
          </label>
          <select
            className="w-full border border-blue-400 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
            id={selectId}
            aria-label="Currency Type"
            value={currency}
            onChange={(e) => {
              onCurrencyChange(e.target.value);
            }}
          >
            {CurrencyOptions.length ? (
              CurrencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No options available
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

InputBox.prototype = {
  className: PropTypes.string,
  CurrencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  inputDisabled: PropTypes.bool,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAmountChange: PropTypes.func,
  currency: PropTypes.string,
  onCurrencyChange: PropTypes.func,
};

InputBox.defaultProps = {
  className: "",
  CurrencyOptions: [],
  label: "Amount",
  inputDisabled: false,
  amount: "",
  currency: "usd",
};

export default InputBox;
