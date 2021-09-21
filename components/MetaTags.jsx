import Head from 'next/head'

const MetaTags = () => {
	return (
		<Head>
			<title>Efrén Martínez Rodríguez | Front-end engineer</title>
			<link rel="canonical" href="https://efrenmartinez.dev/" />
			<meta
				name="description"
				content="I´m Front End Engineer from Queretaro, Mexico. I code, write and build stuff on internet."
			/>
			<meta charset="UTF-8" />
			<meta
				name="keywords"
				content="technology,software,web,development,fullstack,software engineer,developer,jamstack"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://efrenmartinez.dev" />
			<meta property="og:title" content="website" />
			<meta
				property="og:type"
				content="Efrén Martínez Rodríguez | Front-end engineer"
			/>
			<meta
				property="og:description"
				content="I´m Front End Engineer from Queretaro, Mexico. I code, write and build stuff on internet."
			/>
			<meta
				property="og:image"
				content="https://res.cloudinary.com/efrenmartinez/image/upload/v1630004019/efrenmartinez.dev/thumbs_seo.png"
			/>
			// Twitter Card
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://efrenmartinez.dev" />
			<meta
				property="twitter:title"
				content="Efrén Martínez Rodríguez | Front-end engineer"
			/>
			<meta
				property="twitter:description"
				content="I´m Front End Engineer from Queretaro, Mexico. I code, write and build stuff on internet."
			/>
			<meta
				property="twitter:image"
				content="https://res.cloudinary.com/efrenmartinez/image/upload/v1630004019/efrenmartinez.dev/thumbs_seo.png"
			/>
			<meta property="twitter:creator" content="@efrenmartinezmx" />
			<meta property="twitter:site" content="@efrenmartinezmx" />
			<meta
				property="twitter:image:alt"
				content="Efrén Martínez Rodríguez -- Front-end engineer"
			/>
			<link
				rel="icon"
				href="https://res.cloudinary.com/efrenmartinez/image/upload/v1608834240/efrenmartinez.dev/favicon_lvhhjc.svg"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>
		</Head>
	)
}

export default MetaTags
