import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Card.module.css'

const Card = (props) => {
	const { name, imgSrc, imgAlt, tecnologies, reverse, url } = props
	return (
		<div
			className={styles.cardContainer}
			style={{ flexDirection: reverse ? 'row' : 'row-reverse' }}
		>
			<div className={styles.cardImage}>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<Image src={imgSrc} alt={imgAlt} width={490} height={320} />
				</a>
			</div>
			<div className={styles.cardDescription}>
				<p className={styles.paragraphProyect}>
					{tecnologies.join(' ')}
				</p>
				<h4 className={styles.titleProyect}>{name}</h4>
				<p className={styles.paragraphProyect}>
					<a
						className="Button"
						href={url}
						target="_blank"
						rel="noopener noreferrer"
					>
						View project
					</a>
				</p>
			</div>
		</div>
	)
}

export default Card
