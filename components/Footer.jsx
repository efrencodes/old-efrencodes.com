import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = (props) => {
	const { socialMedia } = props
	return (
		<footer className={styles.footer}>
			<div className={styles.socialmedia}>
				<div className="">
					{socialMedia.map(({ name, href, icon, alt }) => (
						<a
							key={name}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={icon}
								alt={alt}
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
