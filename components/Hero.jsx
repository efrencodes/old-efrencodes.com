import React from 'react'
import styles from '../styles/Hero.module.css'
import MediaSocial from './MediaSocial'

const Hero = (props) => {
	const { socialMedia } = props
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>
				Soy Efrén Martínez,
				<br /> Front End Engineer
				<br />
				de la cuidad de Querétaro, México 🇲🇽 .
				<br />
				Actualmente trabajó en{' '}
				<a
					href="https://www.occ.com.mx/"
					target="_blank"
					rel="noopener noreferrer"
				>
					OCC Mundial
				</a>
				.
			</h1>
			<h2 className={styles.subtitle}>
				Construyó productos y plataformas web específicamente con{' '}
				<span className={styles.vue}>VueJS</span> y{' '}
				<span className={styles.react}>ReactJS</span>.
			</h2>
			<p className={styles.paragraph}>Puedes encontrarme en:</p>
			<MediaSocial socialMedia={socialMedia} size={30} />
		</main>
	)
}

export default Hero
