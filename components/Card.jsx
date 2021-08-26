import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = (props) => {
	const { name, imgSrc, imgAlt, tecnologies, description, reverse } = props
	return (
		<div
			className={styles.cardContainer}
			style={{ 'flex-direction': reverse ? 'row' : 'row-reverse' }}
		>
			<div className={styles.cardImage}>
				<Image src={imgSrc} alt={imgAlt} width={400} height={280} />
			</div>
			<div className={styles.cardDescription}>
				<h4>{name}</h4>
				<p>{description}</p>
				<p>{tecnologies.join(' ')}</p>
			</div>
		</div>
	)
}

export default Card
