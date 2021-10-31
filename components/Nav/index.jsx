import Link from 'next/link'
import styles from '../../styles/Nav.module.css'

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/">
						<a>HOME</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>ABOUT</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
