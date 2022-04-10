import * as webpack from "webpack";
import path from "path";

import chalk from "chalk";
import ProgressBarPlugin from "progress-bar-webpack-plugin"

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
    // @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/50948
    plugins: [
        new ProgressBarPlugin({
            format: ` :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
            total: 100
        }) as { apply(...args: any[]): void; },
    ]
};

export default config;