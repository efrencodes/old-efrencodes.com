const proyecto = [
	{
		name: 'Dental office - Dr. Carlos Servin Tovar.',
		url: 'https://drcarlosservin.com/',
		reverse: false,
		img: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1633642794/efrenmartinez.dev/projects/project_dr_carlos_servin.png',
			alt: 'Project - Dr Carlos Servin Tovar'
		},
		tecnologies: [
			'• NextJS',
			'• ReactJS',
			'• API Calendly',
			'• CSS Modules',
			'• API Routes',
			'• SEO'
		]
	},
	{
		name: 'Ecommerce Ordiexpress.',
		url: 'https://www.ordiexpress.com/',
		reverse: true,
		img: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1630000496/efrenmartinez.dev/projects/project_ordiexpress.png',
			alt: 'Project - Ecommerce Ordiexpress'
		},
		// description:
		// 	'Ecommerce Ordiexpres is a project for Canada client. Website is available in English and French.',
		tecnologies: [
			'• Quasar Framework',
			'• VueJS',
			'• HTML/SASS',
			'• JavaScript',
			'• API Rest',
			'• i18n',
			'• Google Analytics',
			'• SEO'
		]
	},
	{
		name: 'Suzuki Mexico Autos.',
		url: 'https://www.suzuki.com.mx/autos',
		reverse: false,
		img: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1630000497/efrenmartinez.dev/projects/project_suzuki.png',
			alt: 'Project - Suzuki México Autos'
		},
		tecnologies: [
			'• VueJS',
			'• Quasar Framework',
			'• HTML/SASS',
			'• JavaScript',
			'• Google Maps',
			'• API Rest'
		]
	},
	{
		name: 'Ecommerce Bticino Mexico.',
		url: 'https://store.bticino.com.mx/',
		reverse: true,
		img: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1630000496/efrenmartinez.dev/projects/project_bticino_store.png',
			alt: 'Project - Store Bticino México'
		},
		// description:
		// 	'Project completed in Marciano Studio. The goal was to rebuild the site from scratch to have a maintainable code as well as improve performance.',
		tecnologies: [
			'• VueJS',
			'• Quasar Framework',
			'• HTML/SASS',
			'• API Rest',
			'• JavaScript',
			'• Open Pay'
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
