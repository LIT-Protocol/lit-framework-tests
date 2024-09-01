module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.module.rules = webpackConfig.module.rules.map(
                (rule) => {
                    if (Array.isArray(rule.oneOf)) {
                        rule.oneOf[rule.oneOf.length - 1].exclude = [
                            /\.(js|mjs|jsx|cjs|ts|tsx)$/,
                            /\.html$/,
                            /\.json$/,
                        ];
                    }
                    return rule;
                }
            );

            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                buffer: require.resolve("buffer/"),
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                vm: require.resolve("vm-browserify"),
                http: false,
                https: false,
                zlib: false,
                url: false,
            };

            return webpackConfig;
        },
    },
};
