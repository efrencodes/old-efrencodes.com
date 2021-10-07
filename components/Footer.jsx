import React from 'react'
import MediaSocial from './MediaSocial'
import styles from '../styles/Footer.module.css'

const Footer = (props) => {
	const { socialMedia } = props
	return (
		<footer className={styles.footer}>
			<div className={styles.socialmedia}>
				<div className="">
					<h5 className={styles.Title}>Let's Connect</h5>
					<MediaSocial socialMedia={socialMedia} size={30} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
