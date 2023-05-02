/** @type {import("next").NextConfig} */
export const config = {
    trailingSlash: true, // turbopack not support
    reactStrictMode: true,
    output: "export",
    experimental: {
        appDir: true,
    },
};

export default config;
