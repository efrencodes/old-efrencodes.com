import React from 'react'
import styles from '../styles/Hero.module.css'
import MediaSocial from './MediaSocial'

const Hero = (props) => {
	const { socialMedia } = props
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>
				I'm Efren Martinez,
				<br /> a Front end Engineer
				<br />
				from Queretaro, Mexico 🇲🇽 .
				<br /> I work at{' '}
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
				I code, write and build products on internet, specifically{' '}
				<span className={styles.vue}>VueJS</span> and{' '}
				<span className={styles.react}>ReactJS</span>.
			</h2>
			<p className={styles.paragraph}>You can find me on</p>
			<MediaSocial socialMedia={socialMedia} size={30} />
		</main>
	)
}

export default Hero
