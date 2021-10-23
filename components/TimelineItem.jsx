import React from 'react'
import Image from 'next/image'
import styles from '../styles/TimelineItem.module.css'

const TimelineItem = (props) => {
	const { job, company, duration, img, alt } = props
	return (
		<li className={styles.containerItem}>
			<div className={styles.containerTop}>
				<div className={styles.containerCircle}>
					<Image src={img} alt={alt} width={40} height={40} />
				</div>
				<div className={styles.containerTitle}>
					{job} at <span>@{company}</span>
					<p>{duration}</p>
				</div>
			</div>
		</li>
	)
}

export default TimelineItem
