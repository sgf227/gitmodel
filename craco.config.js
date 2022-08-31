const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    babel: {
        plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
    },
    module: {
        rules: [
            {
                test: /.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
                options: {
                    sourceMap: true, // <-- !!IMPORTANT!!
                },
            },
        ],
    },
    //配置代理解决跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://XXXXXXXX:8888',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
};
