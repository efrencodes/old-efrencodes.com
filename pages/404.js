import Link from 'next/link'

const Custom404 = () => {
	return (
		<>
			<h1>404 - Page Not Found</h1>
			<Link href="/">
				<a>Ir al inicio</a>
			</Link>
		</>
	)
}
export default Custom404
