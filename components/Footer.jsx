import React from 'react'
import MediaSocial from './MediaSocial'
import styles from '../styles/Footer.module.css'

const Footer = (props) => {
	const { socialMedia } = props
	return (
		<footer className={styles.footer}>
			<div className={styles.socialmedia}>
				<div className="">
					<h5 className={styles.Title}>Let's make great</h5>
					<h5 className={styles.Title}>products together!</h5>
					<h5 className={styles.Title}>You can find me on</h5>
					<MediaSocial socialMedia={socialMedia} size={30} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
