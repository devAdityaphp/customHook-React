import React, { useState, useEffect } from 'react';

import './style.css';
import useFnHook from './hooks/useFnHook';
export default function App() {
  const { count, inc, decre } = useFnHook();
  const [renderCnt, setRenderCnt] = useState(0);

  useEffect(() => {
    if (renderCnt > 2 && renderCnt % 3 == 0) {
      inc();
    }
  }, [renderCnt]);
  const renderHandler = () => {
    setRenderCnt((pre) => pre + 1);
  };
  return (
    <div>
      <h1>
        Hello {renderCnt} {count}
      </h1>
      <button onClick={renderHandler}>+</button>
      <button onClick={inc}>+</button>
      <br />
      <br />
      <button onClick={decre}>-</button>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
