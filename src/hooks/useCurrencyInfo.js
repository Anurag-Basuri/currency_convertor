import { useState, useEffect } from "react";

function useCurrencyInfo(apiKey) {
    const [rates, setRates] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            const url =
                "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest";
            const options = {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        apiKey,
                    "x-rapidapi-host":
                        "currency-conversion-and-exchange-rates.p.rapidapi.com",
                },
            };

            try {
                const response = await fetch(url, options);
                console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch currency rates");
                }
                const data = await response.json();
                setRates(data["rates"]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencyRates();
    }, [apiKey]);

    return { rates, loading, error };
}

export default useCurrencyInfo;
