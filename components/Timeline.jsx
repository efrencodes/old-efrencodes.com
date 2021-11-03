import TimelineItem from './TimelineItem'
import styles from '../styles/Timeline.module.css'

const Timeline = (props) => {
	const { experiencia } = props
	return (
		<div className={styles.timeline}>
			<div className={styles.containerLine}></div>
			<ul className={styles.containerItems}>
				{experiencia.map(
					({ job, company, duration, img, alt, url }) => (
						<TimelineItem
							key={job}
							job={job}
							company={company}
							duration={duration}
							img={img}
							alt={alt}
							url={url}
						/>
					)
				)}
			</ul>
		</div>
	)
}

export default Timeline
