import TimelineItem from './TimelineItem'
import styles from '../styles/Timeline.module.css'

const Timeline = (props) => {
	const { experiencia } = props
	return (
		<div className={styles.timeline}>
			<div class={styles.containerLine}></div>
			<ul class={styles.containerItems}>
				{experiencia.map(({ job, company, duration, img, alt }) => (
					<TimelineItem
						key={job}
						job={job}
						company={company}
						duration={duration}
						img={img}
						alt={alt}
					/>
				))}
			</ul>
		</div>
	)
}

export default Timeline