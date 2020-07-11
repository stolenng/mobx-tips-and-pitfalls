import React, {useEffect, useState} from 'react';
import './App.css';
import showCacheExample from "./examples/computed-cache";

const examples = {
  'Computed Caching': showCacheExample,
  'Test': () => {}
};

function App() {
  const [currentExample, setExample] = useState('Computed Caching');

  useEffect(() => {
    //@ts-ignore
    examples[currentExample]();

  }, [currentExample]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Current Example: {currentExample}</div>
        {
          Object.keys(examples).map((key) => {
            return (
                <div key={key}>
                  <span onClick={() => setExample(key)}>{key}</span>
                </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
