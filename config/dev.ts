import * as webpack from 'webpack'
import { merge } from 'webpack-merge'

import { baseConfig } from "./base.js";

const config: webpack.Configuration = merge(baseConfig, {
    mode: "development"
});

export default config;