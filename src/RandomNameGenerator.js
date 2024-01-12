import React, { useEffect } from 'react';

const RandomNameGenerator = ({ generateName }) => {
  useEffect(() => {
    generateName();
  }, [generateName]);

  return null; // or any other JSX you want
};

export default RandomNameGenerator;
