const experiencia = [
	{
		job: 'Frontend Developer ReactJS',
		company: 'occ_mundial',
		url: 'https://www.occ.com.mx/',
		duration: 'Jul 2021 - Current',
		alt: 'OCC Mundial',
		img: 'https://res.cloudinary.com/efrencodes/image/upload/v1635020753/efrenmartinez.dev/occmundial.webp'
	},
	{
		job: 'Frontend Developer VueJS',
		company: 'marciano_studio',
		url: 'https://marciano.com.mx/',
		duration: 'May 2018 - Jun 2021',
		alt: 'Marciano Studio',
		img: 'https://res.cloudinary.com/efrencodes/image/upload/v1635020743/efrenmartinez.dev/marcianostudio.webp'
	},
	{
		job: 'Web Developer',
		company: 'grupo_educare',
		url: 'https://grupoeducare.com/web/',
		duration: 'Feb 2015 - May 2018',
		alt: 'Grupo Educare',
		img: 'https://res.cloudinary.com/efrencodes/image/upload/v1635020737/efrenmartinez.dev/grupoeducare.webp'
	}
]
export default async (req, res) => {
	try {
		if (req.method === 'GET') {
			res.status(200).json(experiencia)
		}
	} catch (error) {
		console.error(error)
		res.status(500).send()
	}
}
