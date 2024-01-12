import React, { useState } from 'react';
import RandomNameGenerator from './RandomNameGenerator';
import AnotherComponent from './AnotherComponent';

const App = () => {
  const [generatedNames, setGeneratedNames] = useState([]);

  const generateRandomNames = () => {
    const firstNames = ['John', 'Emma', 'Michael', 'Sophia', 'James'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];

    const names = Array.from({ length: 10 }, () => {
      const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      return `${randomFirstName} ${randomLastName}`;
    });

    setGeneratedNames(names);
  };

  return (
    <div>
      <RandomNameGenerator generateName={generateRandomNames} />
      <AnotherComponent generatedNames={generatedNames} />
    </div>
  );
};

export default App;
