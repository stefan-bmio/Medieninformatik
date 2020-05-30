module.exports = {
    devtool: 'inline-source-map',
    entry: {
        build: './test/VerketteterStapelTest.ts'
    },
    output: {
        filename: './build/bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: '/usr/local/lib/node_modules/ts-loader' }
        ]
    }
}