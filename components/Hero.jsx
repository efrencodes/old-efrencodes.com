import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

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
			<p className={styles.paragraph}>You can find me on:</p>
			<div className={styles.socialmedia}>
				<div className="">
					{socialMedia.map(({ name, href, icon, alt }) => (
						<a
							key={name}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={icon}
								alt={alt}
								width={30}
								height={30}
							/>
						</a>
					))}
				</div>
			</div>
		</main>
	)
}

export default Hero
