const proyecto = [
	{
		public: true,
		name: 'Bticino Store México',
		url: 'https://store.bticino.com.mx/',
		background: '#ffc7f4',
		year: 2020,
		month: 9,
		img: {
			src: 'v1620719361/efrenmartinez.dev/projects/store-bticino_jutzgz.jpg',
			alt: 'Store Bticino'
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
	},
	{
		public: true,
		name: 'Bticino Store México',
		url: 'https://store.bticino.com.mx/',
		background: '#ffc7f4',
		year: 2020,
		month: 9,
		img: {
			src: 'v1620719361/efrenmartinez.dev/projects/store-bticino_jutzgz.jpg',
			alt: 'Store Bticino'
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
const Proyectos = (req, res) => {
	res.status(200).json(proyecto)
}

export default Proyectos
