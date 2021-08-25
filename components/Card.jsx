import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = (props) => {
	const { name, imgSrc, imgAlt, tecnologies, description } = props
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardImage}>
				<Image src={imgSrc} alt={imgAlt} width={350} height={250} />
			</div>
			<div className={styles.cardDescription}>
				<h4>{name}</h4>
				<p>{description}</p>
				<p>Powered by: {tecnologies.join(', ')}</p>
			</div>
		</div>
	)
}

export default Card
