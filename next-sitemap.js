module.exports = {
	siteUrl: 'https://efrencodes.com/',
	generateRobotsTxt: false,
	changefreq: 'weekly',
	priority: 0.7,
	sitemapSize: 5000,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: 'Googlebot',
				allow: '/',
				allow: '/about'
			},
			{
				userAgent: '*',
				allow: '/',
				allow: '/about'
			}
		]
	}
}
