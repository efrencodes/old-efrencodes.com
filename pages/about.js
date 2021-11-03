import styles from '../styles/About.module.css'
import MetaTags from '../components/MetaTags'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export const getStaticProps = async () => {
	const URL = 'https://www.efrencodes.com/'
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

export default function About({ experiencia, socialMedia }) {
	return (
		<div className="container">
			<MetaTags title="About - Efren Martinez | Frontend Engineer" />

			<Nav />

			<main className={styles.main}>
				<h1 className={styles.title}>About</h1>
				<h2 className={styles.subtitle}>Profile</h2>
				<p className={styles.paragraph}>
					Hey! I´m Efren Martinez 🇲🇽, a Frontend Engineer with more
					than 5 years of experiencie.
				</p>
				<p className={styles.paragraph}>
					With experience in 💚 VueJS, Quasar, 💙 ReactJS, NextJS 💛
					JavaScript, CSS, NodeJS and much more.
				</p>
				<p className={styles.paragraph}>
					I worked on different projects as Ecommerce, web
					applications, landings pages, api´s.
				</p>
				<p className={styles.paragraph}>
					I am currently learning English, GraphQL and TypeScript.
				</p>
				<hr className={styles.separator} />
				<h2 className={styles.subtitle}>Experience</h2>
				<Timeline experiencia={experiencia} />
			</main>

			<Footer socialMedia={socialMedia} />
		</div>
	)
}
