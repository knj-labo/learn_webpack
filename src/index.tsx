import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
    );
}

const div = document.createElement('div')
document.body.appendChild(div)

ReactDOM.render(<App />, document.body);