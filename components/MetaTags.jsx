import Head from 'next/head'

const MetaTags = () => {
	return (
		<Head>
			<title>Efrén Martínez | FrontEnd Engineer</title>
			<link rel="canonical" href="https://efrenmartinez.dev/" />
			<meta
				name="description"
				content="I'm Front End Engineer from Queretaro, Mexico. I code, write and build stuff on internet. #enmilocalsifunciona #sifuncionanolemuevas"
			/>
			<meta charset="UTF-8" />
			<meta
				name="keywords"
				content="querétaro,technology,software,web,development,fullstack,software engineer,developer,jamstack,vuejs,reactjs,méxico"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://efrenmartinez.dev/" />
			<meta property="og:title" content="website" />
			<meta
				property="og:type"
				content="Efrén Martínez | Front-End Engineer"
			/>
			<meta
				property="og:description"
				content="I'm Front End Engineer from Queretaro, Mexico. I code, write and build stuff on internet. #enmilocalsifunciona #sifuncionanolemuevas"
			/>
			<meta
				property="og:image"
				content="https://res.cloudinary.com/efrenmartinez/image/upload/v1630004019/efrenmartinez.dev/thumbs_seo.png"
			/>
			// Twitter Card
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://efrenmartinez.dev/" />
			<meta
				property="twitter:title"
				content="Efrén Martínez | Front-End Engineer"
			/>
			<meta
				property="twitter:description"
				content="I'm Front End Engineer from Queretaro, Mexico. I code, write and build stuff on internet. #enmilocalsifunciona #sifuncionanolemuevas"
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
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>
		</Head>
	)
}

export default MetaTags
