import React, {useEffect, useState} from 'react';
import './App.css';
import showCacheExample from "./examples/computed-cache";
import showReassignObservableExample from "./examples/reassign-observable";
import ComponentUsesStore from "./examples/component-uses-store";
import {NonObservedComponent, AllComponentObserved, PartialComponentObserved} from "./examples/observing-components";
import {useStore} from "./examples/connect-to-react";

type Examples = { [key: string]: () => void };

const examples: Examples = {
    'Computed Caching': showCacheExample,
    'Reassigning Observables Value': showReassignObservableExample,
};

function App() {
    const [currentExample, setExample] = useState('Computed Caching');
    const {dataStore: {chatStore}} = useStore();

    useEffect(() => {
        examples[currentExample]();

    }, [currentExample]);

    return (
        <div className="App">
            <header className="App-header">
                <div style={{marginBottom: '15px'}}>Current Example: {currentExample}</div>
                {
                    Object.keys(examples).map((key) => {
                        return (
                            <div className='example-name' style={{marginBottom: '5px', cursor: 'pointer'}} key={key}>
                                <span onClick={() => setExample(key)}>{key}</span>
                            </div>
                        )
                    })
                }
                <br/>
                <br/>
                <br/>
                <button onClick={() => chatStore.addRoom()}>Add Room</button>
            <div style={{display: 'flex'}}>
                <ComponentUsesStore />
                <AllComponentObserved />
                <PartialComponentObserved />
                <NonObservedComponent />
            </div>
            </header>
        </div>
    );
}

export default App;
