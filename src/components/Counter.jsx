import { useState, useEffect } from 'react';

const Counter = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const formatNumber = (number) => {
    return number.toString().padStart(1, '0');
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>{formatNumber(Math.floor(minutes / 10))}</div>
      <div style={boxStyle}>{formatNumber(minutes % 10)}</div>
      <div style={colonStyle}>:</div>
      <div style={boxStyle}>{formatNumber(Math.floor(seconds / 10))}</div>
      <div style={boxStyle}>{formatNumber(seconds % 10)}</div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1px',
  color: '#fff',
  backgroundColor: '#1e2a53',
  borderRadius: '4px',
  padding: '6px',
  width: '12px'
};

const colonStyle = {
  fontSize: '24px',
  margin: '0 1px',
  color: '#1e2a53'
};

export default Counter;
