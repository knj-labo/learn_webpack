import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { merge } from 'webpack-merge'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { baseConfig } from "./base.js";

const smp = new SpeedMeasurePlugin();

const mergedConfig: webpack.Configuration= merge(baseConfig, {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: './build',
        hot: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
});

// @ts-ignore
const devConfig = smp.wrap(mergedConfig);

export default devConfig;