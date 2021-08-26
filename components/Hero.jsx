import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Logotipo from './Logotipo'

const Hero = () => {
	return (
		<main className={styles.main}>
			<Image
				src="https://res.cloudinary.com/efrenmartinez/image/upload/v1608834240/efrenmartinez.dev/favicon_b9cqkx.png"
				alt="Foto"
				width={70}
				height={70}
			/>
			<Logotipo />
			<h1 className={styles.subtitle}>
				I´m Front End Engineer from Queretaro, Mexico 🇲🇽 . I code, write
				and build stuff on internet.
			</h1>
			<h2 className={styles.paragraph}>
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
				<span className={styles.paragraphVue}>VueJS</span> and{' '}
				<span className={styles.paragraphReact}>ReactJS</span>.
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
					href="https://github.com/efrenmartinez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="https://res.cloudinary.com/efrenmartinez/image/upload/v1621845051/efrenmartinez.dev/icons/logo-github_g7cma4.svg"
						alt="Logo Github - efrenmartinez"
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
