const proyecto = [
	{
		name: 'Ecommerce Ordiexpress',
		url: 'https://www.ordiexpress.com/',
		reverse: true,
		img: {
			src: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1630000496/efrenmartinez.dev/projects/project_ordiexpress.png',
			alt: 'Project - Ecommerce Ordiexpress'
		},
		// description:
		// 	'Ecommerce Ordiexpres is a project for Canada client. Website is available in English and French.',
		tecnologies: [
			'• VueJS',
			'• QuasarFramework',
			'• HTML/CSS',
			'• JavaScript',
			'• i18n',
			'• GoogleAnalytics',
			'• SEO',
			'• API rest'
		]
	},
	{
		name: 'Suzuki México Autos',
		url: 'https://www.suzuki.com.mx/autos',
		reverse: false,
		img: {
			src: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1630000497/efrenmartinez.dev/projects/project_suzuki.png',
			alt: 'Project - Suzuki México Autos'
		},
		tecnologies: [
			'• VueJS',
			'• QuasarFramework',
			'• HTML/CSS',
			'• JavaScript',
			'• GoogleMaps',
			'• API rest'
		]
	},
	{
		name: 'Ecommerce Bticino México',
		url: 'https://store.bticino.com.mx/',
		reverse: true,
		img: {
			src: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1630000496/efrenmartinez.dev/projects/project_bticino_store.png',
			alt: 'Project - Store Bticino México'
		},
		// description:
		// 	'Project completed in Marciano Studio. The goal was to rebuild the site from scratch to have a maintainable code as well as improve performance.',
		tecnologies: [
			'• VueJS',
			'• QuasarFramework',
			'• HTML/CSS',
			'• API rest',
			'• JavaScript',
			'• OpenPay'
		]
	}
]
export default async (req, res) => {
	try {
		if (req.method === 'GET') {
			res.status(200).json(proyecto)
		}
	} catch (error) {
		console.error(error)
		res.status(500).send()
	}
}
