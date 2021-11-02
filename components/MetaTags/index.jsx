import Head from 'next/head'

const MetaTags = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="canonical" href="https://efrencodes.com/" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
				rel="stylesheet"
			/>
			<meta
				name="description"
				content="I´m Efren Martinez, a Frontend Engineer with experiencie in VueJS • Quasar • ReactJS • NextJS • JavaScript • CSS • NodeJS and much more. #enmilocalsifunciona #sifuncionanolemuevas"
			/>
			<meta charSet="UTF-8" />
			<meta
				name="keywords"
				content="querétaro,technology,software,web,development,fullstack,software engineer,developer,jamstack,vuejs,reactjs,méxico"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://efrencodes.com" />
			<meta property="og:title" content="website" />
			<meta
				property="og:type"
				content="Efren Martinez | Frontend Engineer"
			/>
			<meta
				property="og:description"
				content="I´m Efren Martinez, a Frontend Engineer with experiencie in VueJS • Quasar • ReactJS • NextJS • JavaScript • CSS • NodeJS and much more. #enmilocalsifunciona #sifuncionanolemuevas"
			/>
			<meta
				property="og:image"
				content="https://res.cloudinary.com/efrenmartinez/image/upload/v1630004019/efrenmartinez.dev/thumbs_seo.png"
			/>
			// Twitter Card
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://efrencodes.com" />
			<meta
				property="twitter:title"
				content="Efren Martinez | Frontend Engineer"
			/>
			<meta
				property="twitter:description"
				content="I´m Efren Martinez, a Frontend Engineer with experiencie in VueJS • Quasar • ReactJS • NextJS • JavaScript • CSS • NodeJS and much more. #enmilocalsifunciona #sifuncionanolemuevas"
			/>
			<meta
				property="twitter:image"
				content="https://res.cloudinary.com/efrenmartinez/image/upload/v1630004019/efrenmartinez.dev/thumbs_seo.png"
			/>
			<meta property="twitter:creator" content="@efrencodes" />
			<meta property="twitter:site" content="@efrencodes" />
			<meta
				property="twitter:image:alt"
				content="Efrén Martínez Rodríguez - Front-end engineer"
			/>
		</Head>
	)
}

export default MetaTags
