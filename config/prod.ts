import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TerserPlugin  from 'terser-webpack-plugin';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import { baseConfig } from "./base.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const prodConfig: webpack.Configuration = merge(baseConfig, {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[hash].[name].css",
        }),
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        runtimeChunk: true,
        moduleIds: "deterministic",
        minimizer: [
            new CssMinimizerPlugin({
                parallel: 4,
            }),
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
        splitChunks: {
            cacheGroups:{
                vendors:{
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10,
                    enforce: true
                }
            }
        },
    },
});

export default prodConfig;