import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = (props) => {
	const { name, imgSrc, imgAlt, tecnologies, description } = props
	return (
		<div className={styles.cardContainer}>
			<Image src={imgSrc} alt={imgAlt} width={500} height={300} />
			<div className={styles.cardDescription}>
				<h4>{name}</h4>
				<p>{description}</p>
				<p>Powered by: {tecnologies.join(', ')}</p>
			</div>
		</div>
	)
}

export default Card
