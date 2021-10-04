import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectContainer from '../components/ProjectContainer'
import MetaTags from '../components/MetaTags'
// import { getAllFilesMetadata } from '../lib/mdx'

export const getStaticProps = async () => {
	const URL = 'https://www.efrenmartinez.dev/'
	const projects = await fetch(`${URL}api/proyectos`, {
		method: 'GET'
	}).then((res) => res.json())
	const socialMedia = await fetch(`${URL}api/socialMedia`, {
		method: 'GET'
	}).then((res) => res.json())

	console.log(socialMedia)

	return {
		props: {
			projects,
			socialMedia
		}
	}
}

export default function Home({ projects, socialMedia }) {
	return (
		<div className={styles.container}>
			<MetaTags />

			<Hero socialMedia={socialMedia} />

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
