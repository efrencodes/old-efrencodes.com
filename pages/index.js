import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getAllFilesMetadata } from '../lib/mdx'

export default function Home({ posts, response }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Front-end engineer | Efrén Martínez Rodríguez</title>
				<meta
					name="description"
					content="I´m a front-end engineer based in Querétaro 🇲🇽. Skilled in Vue.js & Nuxt.js, JavaScript (ES6+), HTML & (S)CSS and much more."
				/>
				<meta charset="UTF-8" />
				<link
					rel="icon"
					href="https://res.cloudinary.com/efrenmartinez/image/upload/v1608834240/efrenmartinez.dev/favicon_lvhhjc.svg"
				/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Hi, my name is Efrén Martínez Rodríguez
				</h1>
				<h2>Frontend Enginner</h2>
				{posts.map((post) => (
					<Link key={post.slug} href={post.slug}>
						<a>
							<h2>{post.title}</h2>
							<p>{post.date}</p>
						</a>
					</Link>
				))}
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	)
}

export async function getStaticProps() {
	const posts = await getAllFilesMetadata()

	return {
		props: {
			posts
		}
	}
}
