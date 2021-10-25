const media = [
	{
		name: 'linkedln',
		icon: '/linkedin-icon.svg',
		href: 'https://www.linkedin.com/in/efrencodes/',
		alt: 'Logo LinkedIn - efrencodes'
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
