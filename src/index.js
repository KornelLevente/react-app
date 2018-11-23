// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on this button';
}

// Create a react component
const App = () => {
    const buttonText = 'Click me!';
    return (
        <div>
            <label className="label" for="name">
                Enter name: 
            </label>
            <input id="name"type="text"/>
            <button>
                Submit
            </button>
            <button style={{backgroundColor:'green', color: 'white'}}>
                {buttonText}
            </button>
            <button>
                {getButtonText()}
            </button>
        </div>
    )
};

// Take the react component and show it on the screen.
ReactDOM.render(
    <App />, document.querySelector('#root')
);