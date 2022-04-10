import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'

import { baseConfig } from "./base.js";

const smp = new SpeedMeasurePlugin();
const mergedConfig = merge(baseConfig, {
    mode: "development"
});

// @ts-ignore
const devConfig = smp.wrap(mergedConfig);

export default devConfig;