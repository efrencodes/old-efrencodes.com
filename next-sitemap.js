module.exports = {
	siteUrl: 'https://efrencodes.com/',
	generateRobotsTxt: false,
	changefreq: 'weekly',
	priority: 0.7,
	sitemapSize: 5000,
	generateRobotsTxt: true,
	exclude: ['/about'],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: 'Googlebot',
				allow: '/',
				disallow: '/about'
			},
			{
				userAgent: '*',
				allow: '/',
				disallow: '/about'
			}
		]
	}
}
