'use client'
import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleCount = ():void => {
        // console.log('Counter Increases')
        setCount(count+1)
    }
  return (
    <div>
      <div>
        <h2 className="text-4xl font-blold mb-4">Counter: {count}</h2>
        <button onClick={handleCount} className="bg-blue-500 p-2 rounded-2xl text-white font-semibold hover:border-black">Save Changes</button>
      </div>
    </div>
  );
};

export default Counter;
