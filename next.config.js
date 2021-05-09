module.exports = {
    redirects: () => {
        return [
            {
                source: '/blog/the-storage',
                destination: '/writing/the-storage',
                permanent: true
            },
            {
                source: '/blog/mountain-tracking',
                destination: '/writing/mountain-tracking',
                permanent: true
            },
            {
                source: '/blog/sputnik-v',
                destination: '/writing/sputnik-v',
                permanent: true
            },
            {
                source: '/blog/books',
                destination: '/books',
                permanent: true
            },
            {
                source: '/blog/flow',
                destination: '/books/flow',
                permanent: true
            },
            {
                source: '/blog/mindset',
                destination: '/books/mindset',
                permanent: true
            },
            {
                source: '/blog/yasno-ponyatno',
                destination: '/books/yasno-ponyatno',
                permanent: true
            }
        ];
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });

        return config;
    }
};
