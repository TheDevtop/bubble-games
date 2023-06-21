module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
        assetExts: ['bin', 'txt', 'jpg', 'png', 'json', 'svg', 'ttf', 'otf'],
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'],
    },
};
