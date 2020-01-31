import merge from 'webpack-merge';
import common from './webpack.common';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development'
};

export default merge(common, config);
