import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TerserPlugin  from 'terser-webpack-plugin';

import { baseConfig } from "./base.js";

const prodConfig: webpack.Configuration = merge(baseConfig, {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: 4,
                terserOptions: {
                    parse: {
                        ecma: 2018,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
        ],
    },
});

export default prodConfig;