import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/Custom.module.css'

export const getStaticProps = async () => {
	const URL = 'https://www.efrenmartinez.dev/'
	const socialMedia = await fetch(`${URL}api/socialMedia`, {
		method: 'GET'
	}).then((res) => res.json())

	return {
		props: {
			socialMedia
		}
	}
}

const Custom404 = ({ socialMedia }) => {
	return (
		<div className="container">
			<main className={styles.Main}>
				<h2 className={styles.Subtitle}>404</h2>
				<h1 className={styles.Title}>Lost in space?</h1>
				<Link href="/">
					<a className={styles.Anchor}>Ir al Home</a>
				</Link>
			</main>
			<Footer socialMedia={socialMedia} />
		</div>
	)
}
export default Custom404
