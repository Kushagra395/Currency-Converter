import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/'+currency +'.json ');
                const json = await res.json();
                setData(json[currency] || {}); // Ensure you handle undefined
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData({}); // Reset data on error
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default UseCurrencyInfo;