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
    entry: "./src/index.ts",
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