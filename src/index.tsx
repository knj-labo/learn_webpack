type Words = string[];

const message: Words = ["Hello", "world!"];

console.log(message.join(" "));
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));