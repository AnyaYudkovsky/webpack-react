/**
 * Created by anyayudkovsky on 4/8/16.
 */
const path = require('path');
const PATHS = {
    app: path.join(__dirname, 'app'), build: path.join(__dirname, 'build')
};
module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    }
};