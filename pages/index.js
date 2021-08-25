import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectContainer from '../components/ProjectContainer'
// import { getAllFilesMetadata } from '../lib/mdx'

export default function Home(/* { posts, response } */) {
	const [projects, setProjects] = useState([])
	const [socialMedia, setSocialMedia] = useState([])

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
		setSocialMedia(response)
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

			<Hero />

			<ProjectContainer projects={projects} />

			<Footer socialMedia={socialMedia} />
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
