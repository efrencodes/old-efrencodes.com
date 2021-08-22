const proyecto = [
	{
		name: 'Ecommerce Ordiexpres',
		url: 'https://www.ordiexpress.com/',
		background: '#c5dae8',
		year: 2021,
		month: 3,
		img: {
			src: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1620713904/efrenmartinez.dev/projects/ecommerce-ordiexpres_g8okrm.jpg',
			alt: 'Ecommerce Ordiexpress',
			width: 500,
			height: 300
		},
		description:
			'Ecommerce Ordiexpres is a project for Canada client. Website is available in English and French.',
		tecnologies: [
			'#VueJS',
			'#Quasar_Framework',
			'#HTML/CSS',
			'#JavaScript',
			'#i18n',
			'#Google_Analytics',
			'#SEO'
		]
	},
	// {
	// 	name: 'Suzuki México',
	// 	url: 'https://www.suzuki.com.mx/autos',
	// 	background: '#c5dae8',
	// 	year: 2020,
	// 	month: 6,
	// 	img: {
	// 		src: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1608836158/efrenmartinez.dev/projects/suzuki-swift-sport_k5ikza_qzemxy.png',
	// 		alt: 'Suzuki México',
	// 		width: 400,
	// 		height: 700
	// 	}
	// },
	{
		name: 'Bticino Store México',
		url: 'https://store.bticino.com.mx/',
		background: '#ffc7f4',
		year: 2020,
		month: 9,
		img: {
			src: 'https://res.cloudinary.com/efrenmartinez/image/upload/v1620719361/efrenmartinez.dev/projects/store-bticino_jutzgz.jpg',
			alt: 'Store Bticino',
			width: 500,
			height: 300
		},
		description:
			'Project completed in Marciano Studio. The goal was to rebuild the site from scratch to have a maintainable code as well as improve performance.',
		tecnologies: [
			'#VueJS',
			'#Quasar_Framework',
			'#HTML/CSS',
			'#JavaScript',
			'#Google_Maps',
			'#OpenPay'
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
