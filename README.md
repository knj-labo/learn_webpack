# learn_webpack

```shell
$ pnpm i -DE webpack webpack-cli ts-loader typescript 

dependencies:
+ webpack 5.72.0
+ webpack-cli 4.9.2
+ babel-loader 8.2.4
+ ts-loader 9.2.8
+ typescript 4.6.3
```

```shell
$ pnpm i -SE react react-dom @types/react @types/react-dom

dependencies:
+ @types/react 18.0.0
+ @types/react-dom 18.0.0
+ react 18.0.0
+ react-dom 18.0.0
```

```shell
$  pnpm i -SE ts-node
$  pnpm i -DE types/node

dependencies:
+ @types/node 17.0.23
+ ts-node 10.7.0
+ @babel/core 7.17.9
+ @babel/preset-env 7.16.11
```

// @see https://github.com/TypeStrong/ts-node/issues/1007
```shell
NODE_OPTIONS=--loader=ts-node/esm webpack --config config/base.ts
```

```javascript:config/base.ts
import * as webpack from "webpack";
import path from "path";

const rules: webpack.RuleSetRule[] = [
    {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
    },
    {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
    },
]

const config: webpack.Configuration = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(process.cwd() + "/build"),
        filename: "index.js",
    },
    module: {
        rules: rules
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

export default config;
```

```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubComponent} from './sub-component';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello React!</h1>
          <SubComponent name="My Counter for TypeScript"/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

```shell
$ pnpm i -DE progress-bar-webpack-plugin @types/progress-bar-webpack-plugin chalk

devDependencies:
+ chalk 5.0.1
+ progress-bar-webpack-plugin 2.1.0
```

```shell
kenji@PC046 21_learn-webpack % pnpm build

> webpack-typescript-config@ build /Users/kenji/Project/01_private/21_learn-webpack
> NODE_OPTIONS=--loader=ts-node/esm webpack --config config/base.ts

(node:24338) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 sealing [==================  ] 92% (2.1 s)(node:24338) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Build completed in 4.77s
```

```shell
$ pnpm i -DE  webpack-merge @types/webpack-merge

```