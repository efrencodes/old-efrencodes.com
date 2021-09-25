import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import Logotipo from './Logotipo'

const Footer = (props) => {
	const { socialMedia } = props
	return (
		<footer className={styles.footer}>
			<div className={styles.socialmedia}>
				<div className="">
					{socialMedia.map((social) => (
						<a
							key={social.name}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={social.icon}
								alt={social.alt}
								width={25}
								height={25}
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
