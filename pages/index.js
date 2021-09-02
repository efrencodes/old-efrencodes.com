import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectContainer from '../components/ProjectContainer'
import MetaTags from '../components/MetaTags'
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
			<MetaTags />

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
