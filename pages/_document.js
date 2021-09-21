import Document, { Html, Main, Head, NextScript } from 'next/document'
import MetaTags from '../components/MetaTags'
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<MetaTags />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
