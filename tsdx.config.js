module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
        // console.log('output',config.output.file);
        // throw config.output.file;
        delete config.output.file;
        config.output.dir = './dist';
        return config; // always return a config.
    },
};