import Image from 'next/image'
import styles from '@/styles/MediaSocial.module.css'

const MediaSocial = (props) => {
	const { socialMedia, size } = props
	return (
		<div className={styles.socialmedia}>
			{socialMedia.map(({ name, href, icon, alt }) => (
				<a
					key={name}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src={icon} alt={alt} width={size} height={size} />
				</a>
			))}
		</div>
	)
}

export default MediaSocial
