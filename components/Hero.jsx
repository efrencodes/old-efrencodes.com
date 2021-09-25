import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>
				I'm Efren Martinez, a Front End Engineer from Queretaro, Mexico
				🇲🇽 . I code, write and build stuff on internet.
			</h1>
			<h2 className={styles.subtitle}>
				I work at{' '}
				<a
					href="https://www.occ.com.mx/"
					target="_blank"
					rel="noopener noreferrer"
				>
					OCC Mundial
				</a>{' '}
				as FrontEnd developer ReactJS. I'm focused on building products
				with JavaScript, specifically{' '}
				<span className={styles.vue}>VueJS</span> and{' '}
				<span className={styles.react}>ReactJS</span>.
			</h2>
			<p className={styles.paragraph}>
				You can find me on{'   '}
				<a
					href="https://www.linkedin.com/in/efren-martinez-rodriguez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="https://res.cloudinary.com/efrenmartinez/image/upload/v1621845051/efrenmartinez.dev/icons/logo-linkedin_isre0b.svg"
						alt="Logo LinkedIn - efren-martinez-rodriguez"
						width={25}
						height={25}
					/>
				</a>
				{'   '}or{'   '}
				<a
					href="https://github.com/efrencodes/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="https://res.cloudinary.com/efrenmartinez/image/upload/v1621845051/efrenmartinez.dev/icons/logo-github_g7cma4.svg"
						alt="Logo Github - efrencodes"
						width={25}
						height={25}
					/>
				</a>
				.
			</p>
		</main>
	)
}

export default Hero
