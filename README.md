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

```shell
kenji@PC046 21_learn-webpack % pnpm i -DE webpack-bundle-analyzer
Packages: +11 -1
+++++++++++-
Progress: resolved 338, reused 338, downloaded 0, added 11, done

devDependencies:
+ webpack-bundle-analyzer 4.5.0
- webpack-cli 4.9.2
+ webpack-cli 4.9.2

Progress: resolved 338, reused 338, downloaded 0, added 11, done

devDependencies:
+ webpack-bundle-analyzer 4.5.0
- webpack-cli 4.9.2
+ webpack-cli 4.9.2
kenji@PC046 21_learn-webpack % pnpm install -DE @types/webpack-bundle-analyzer
Packages: +1
+
Progress: resolved 339, reused 338, downloaded 1, added 1, done

devDependencies:
+ @types/webpack-bundle-analyzer 4.4.1

devDependencies:
- webpack-cli 4.9.2
+ webpack-cli 4.9.2
+ webpack-dev-server 4.8.1
```

```shell
devDependencies:
+ @pmmmwh/react-refresh-webpack-plugin 0.5.5
+ react-refresh 0.12.0
```


```shell
asset index.js 135 KiB [emitted] [minimized] (name: main) 1 related asset
modules by path ./node_modules/.pnpm/react@18.0.0/node_modules/react/ 6.96 KiB
  ./node_modules/.pnpm/react@18.0.0/node_modules/react/index.js 190 bytes [built] [code generated]
  ./node_modules/.pnpm/react@18.0.0/node_modules/react/cjs/react.production.min.js 6.77 KiB [built] [code generated]
modules by path ./node_modules/.pnpm/react-dom@18.0.0_react@18.0.0/node_modules/react-dom/ 130 KiB
  ./node_modules/.pnpm/react-dom@18.0.0_react@18.0.0/node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ./node_modules/.pnpm/react-dom@18.0.0_react@18.0.0/node_modules/react-dom/cjs/react-dom.production.min.js 128 KiB [built] [code generated]
modules by path ./node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/ 4.33 KiB
  ./node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ./node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
./src/index.tsx 337 bytes [built] [code generated]
webpack 5.72.0 compiled successfully in 6338 ms

```