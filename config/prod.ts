import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { baseConfig } from "./base.js";

const prodConfig: webpack.Configuration = merge(baseConfig, {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
});

export default prodConfig;