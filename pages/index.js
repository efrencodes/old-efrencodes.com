import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
// import { getAllFilesMetadata } from '../lib/mdx'

export default function Home(/* { posts, response } */) {
	const [projects, setProjects] = useState([])
	const [media, setMedia] = useState([])

	useEffect(async () => {
		let response = await fetch('api/proyectos', {
			method: 'GET'
		}).then((res) => res.json())
		setProjects(response)
	}, [])

	useEffect(async () => {
		let response = await fetch('api/socialMedia', {
			method: 'GET'
		}).then((res) => res.json())
		setMedia(response)
	}, [])

	return (
		<div className={styles.container}>
			<Head>
				<title>Front-end engineer | Efrén Martínez Rodríguez</title>
				<meta
					name="description"
					content="I´m FrontEnd Enginner from Queretaro, Mexico. I code, write and build stuff on internet."
				/>
				<meta charset="UTF-8" />
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
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					EFREN <span>MARTINEZ</span>
				</h1>
				<h1 className={styles.subtitle}>
					I´m FrontEnd Enginner from Queretaro, Mexico 🇲🇽 . I code,
					write and build stuff on internet.
				</h1>
				<h2 className={styles.paragraph}>
					I work at{' '}
					<a
						href="https://www.occ.com.mx/"
						target="_blank"
						rel="noopener noreferrer"
					>
						OCC Mundial
					</a>{' '}
					as FrontEnd developer ReactJS. I'm focused on building
					products with JavaScript, specifically{' '}
					<span className={styles.paragraphVue}>VueJS</span> and{' '}
					<span className={styles.paragraphReact}>ReactJS</span>.
				</h2>
				<p className={styles.paragraph}>
					You can find me on{'   '}
					<a
						href="https://www.linkedin.com/in/efren-martinez-rodriguez/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="https://res.cloudinary.com/efrenmartinez/image/upload/v1621845051/efrenmartinez.dev/icons/logo-linkedin_isre0b.svg"
							width={25}
							height={25}
						/>
					</a>
					{'   '}or{'   '}
					<a
						href="https://github.com/efrenmartinez/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="https://res.cloudinary.com/efrenmartinez/image/upload/v1621845051/efrenmartinez.dev/icons/logo-github_g7cma4.svg"
							width={25}
							height={25}
						/>
					</a>
					.
				</p>
			</main>

			<section className={styles.sectionProject}>
				<h3 className={styles.projectTitle}>
					Some great projects I worked on
				</h3>
				<ul className={styles.projectList}>
					{projects.map((project) => (
						<li key={project.name}>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Card
									name={project.name}
									imgSrc={project.img.src}
									imgAlt={project.img.alt}
									tecnologies={project.tecnologies}
									description={project.description}
								/>
							</a>
						</li>
					))}
				</ul>
			</section>

			<footer className={styles.footer}>
				<a
					href="https://efrenmartinez.dev/"
					target="_blank"
					rel="noopener noreferrer"
				>
					efrenmartinez.dev
				</a>
				<div className="">
					{media.map((social) => (
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={social.icon} width={25} height={25} />
						</a>
					))}
				</div>
			</footer>
		</div>
	)
}

// export async function getStaticProps() {
// 	const posts = await getAllFilesMetadata()
// 	return {
// 		props: {
// 			posts
// 		}
// 	}
// }
