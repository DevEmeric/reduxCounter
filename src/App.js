import React, { Component } from 'react';
import CounterComponent from "./Containers/CounterContainer"



class App extends Component {
    render() {
        return (
            <div className="App">
                <CounterComponent />
            </div>
        );
    }
}

export default App;
