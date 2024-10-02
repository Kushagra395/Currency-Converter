import { useState } from 'react'
import  UseCurrencyInfo from './hooks/ UseCurrencyInfo.js'
import InputBox from './components/Input.jsx'
function App() {
  const [amount,setamount]=useState(0)
  const [from,setfrom]=useState("usd")
  const [to,setto]=useState("inr")
  const [converted,setconverted]=useState([])
  const CurrencyInfo= UseCurrencyInfo(from)
  const options = CurrencyInfo && typeof CurrencyInfo === 'object' 
        ? Object.keys(CurrencyInfo) 
        : []; //jo haam fetch kare hai from our own hook usmai sai key lake dega bass mtlb value bass so used object.key()
   const swap= ()=>{
    setfrom(to)
    setto(from)
    setconverted(amount)
    setamount(converted)
   }
   const convert=()=>{
    setconverted(amount*CurrencyInfo[to])
   }
   return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center relative overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src=" https://videos.pexels.com/video-files/3752548/3752548-sd_640_360_24fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <div className="w-full">
            <div className="w-full max-w-2xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                    <InputBox
    label="From"
    amount={amount}
    currencyOption={options} // Change Option to options
    onCurrencyChange={(currency) => setfrom(currency)} // Update from currency
    selectCurrency={from}
    onAmountChange={(amount) => setamount(amount)}
/>
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <InputBox
    label="To"
    amount={converted}
    currencyOption={options} // Change Option to options
    onCurrencyChange={(currency) => setto(currency)} // Update to currency
    selectCurrency={to} // Change from `from` to `to`
    onAmountChange={() => {}} // No amount change needed here
/>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App
