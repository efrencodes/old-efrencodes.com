import styles from '../styles/ProjectContainer.module.css'
import Card from '../components/Card'

const ProjectContainer = (props) => {
	const { projects } = props
	return (
		<section className={styles.projectContainer}>
			<h3 className={styles.projectTitle}>
				Projects <span>BIG and small.</span>
			</h3>
			<ul className={styles.projectList}>
				{projects.map(({ name, img, tecnologies, reverse, url }) => (
					<li key={name}>
						<Card
							name={name}
							imgSrc={img.src}
							imgAlt={img.alt}
							tecnologies={tecnologies}
							reverse={reverse}
							url={url}
						/>
					</li>
				))}
			</ul>
		</section>
	)
}

export default ProjectContainer
