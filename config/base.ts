import * as webpack from "webpack";
import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
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

export const baseConfig: webpack.Configuration = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(process.cwd() + "/build"),
        filename: '[name].bundle.js',
    },
    module: {
        rules: rules
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        // @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/50948
        new ProgressBarPlugin({
            format: ` :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
            total: 100
        }) as { apply(...args: any[]): void; },
    ],
    target: "web"
};
