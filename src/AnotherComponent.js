import React, { useState, useEffect } from 'react';

const AnotherComponent = ({ generatedNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % generatedNames.length);
    }, 100000); // Change the interval duration as needed (currently set to 1 second)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [generatedNames]);

  return (
    <div>
      <h2>Automating and Looping Through Generated Names:</h2>
      <p>{generatedNames[currentIndex]}</p>
    </div>
  );
};

export default AnotherComponent;
