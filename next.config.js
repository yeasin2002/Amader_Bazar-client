/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// domains: ["localhost", "amaderbazar.netlify.app", "amader-bazar.onrender.com"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "amaderbazar.netlify.app",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "amader-bazar.onrender.com",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;
