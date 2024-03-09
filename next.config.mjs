/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add html-loader to handle HTML files
        config.module.rules.push({
            test: /\.html$/,
            loader: 'html-loader',
        });

        // You might also want to handle other file types, like images
        // For example, to handle PNG files:
        config.module.rules.push({
            test: /\.png$/,
            loader: 'file-loader',
        });

        return config;
    },
};

export default nextConfig;
