const media = [
	{
		name: 'linkedln',
		icon: '/linkedin-icon.svg',
		href: 'https://www.linkedin.com/in/efren-martinez-rodriguez/',
		alt: 'Logo LinkedIn - efren-martinez-rodriguez'
	},
	{
		name: 'github',
		icon: '/github-icon.svg',
		href: 'https://github.com/efrencodes/',
		alt: 'Logo Github - efrencodes'
	}
]
export default async (req, res) => {
	try {
		if (req.method === 'GET') {
			res.status(200).json(media)
		}
	} catch (error) {
		console.error(error)
		res.status(500).send()
	}
}
