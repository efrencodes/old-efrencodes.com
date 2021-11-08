import React from 'react'
import styles from '@/styles/Hero.module.css'
import MediaSocial from '@/components/MediaSocial'

const Hero = (props) => {
	const { socialMedia } = props
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>
				Hey! I´m Efren Martinez,
				<br />a frontend engineer
				<br />
				from Queretaro City, Mexico 🇲🇽 .
				<br />I work on{' '}
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
				I code and build stuff specifically{' '}
				<span className={styles.vue}>VueJS</span> and{' '}
				<span className={styles.react}>ReactJS</span>.
			</h2>
			<p className={styles.paragraph}>You can find me on</p>
			<MediaSocial socialMedia={socialMedia} size={30} />
		</main>
	)
}

export default Hero
