const withPlugins = require("next-compose-plugins");

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withTM = require('next-transpile-modules');

module.exports = withPlugins([
    withTM({
        transpileModules: ['three'],
        webpack: (config, { dev }) => {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                  loader: "url-loader",
                  options: {
                    limit: 1000000
                  }
                }
            });
            return config;
        },
        // webpack(config, options) {
        //     const eslintRule = {
        //         // omitted for brevity
        //     };
        //     config.module.rules.unshift(eslintRule);
        //     return config;
        // }}
    }),
    withCSS, 
    withSass, 
    withImages 
]);


