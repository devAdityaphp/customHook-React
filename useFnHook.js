import React, { useState } from 'react';
const useFnHook = (inti = 0) => {
  const [count, setCounter] = useState(inti);
  const inc = () => {
    setCounter((pre) => pre + 1);
  };
  const decre = () => {
    setCounter((pre) => pre - 1);
  };

  return { count, inc, decre };
};
export default useFnHook;
