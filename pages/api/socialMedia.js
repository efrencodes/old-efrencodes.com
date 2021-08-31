const media = [
	{
		name: 'linkedln',
		icon: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1621845051/efrenmartinez.dev/icons/logo-linkedin_isre0b.svg',
		href: 'https://www.linkedin.com/in/efren-martinez-rodriguez/',
		alt: 'Logo LinkedIn - efren-martinez-rodriguez'
	},
	{
		name: 'github',
		icon: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1621845051/efrenmartinez.dev/icons/logo-github_g7cma4.svg',
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
