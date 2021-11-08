import React from 'react'
import Image from 'next/image'
import styles from '@/styles/TimelineItem.module.css'

const TimelineItem = (props) => {
	const { job, company, duration, img, alt, url } = props
	return (
		<li className={styles.containerItem}>
			<div className={styles.containerTop}>
				<div className={styles.containerCircle}>
					<Image src={img} alt={alt} width={60} height={60} />
				</div>
				<div className={styles.containerTitle}>
					{job} at{' '}
					<a href={url} target="_blank" rel="noopener noreferrer">
						@{company}
					</a>
					<p>{duration}</p>
				</div>
			</div>
		</li>
	)
}

export default TimelineItem
