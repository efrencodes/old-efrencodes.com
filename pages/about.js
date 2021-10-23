import styles from '../styles/About.module.css'
import MetaTags from '../components/MetaTags'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

export const getStaticProps = async () => {
	const URL = 'https://efrencodes.com/'
	const experiencia = await fetch(`${URL}api/experiencia`, {
		method: 'GET'
	}).then((res) => res.json())
	const socialMedia = await fetch(`${URL}api/socialMedia`, {
		method: 'GET'
	}).then((res) => res.json())

	return {
		props: {
			experiencia,
			socialMedia
		}
	}
}

const About = ({ experiencia, socialMedia }) => {
	return (
		<div className="container">
			<MetaTags />

			<main className={styles.main}>
				<h1 className={styles.title}>Sobre mi</h1>
				<h2 className={styles.subtitle}>Perfil</h2>
				<h2 className={styles.subtitle}>Especialidades</h2>
				<ul className={styles.list}>
					<li className={styles.item}>💛 JavaScript</li>
					<li className={styles.item}>💚 VueJS</li>
					<li className={styles.item}>💙 ReactJS</li>
				</ul>
				<hr className={styles.separator} />
				<h2 className={styles.subtitle}>Experiencia</h2>
				<Timeline experiencia={experiencia} />
			</main>
			<Footer socialMedia={socialMedia} />
		</div>
	)
}

export default About
