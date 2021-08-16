import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const ROOT = process.cwd()

// Lee todos los ficheros de la carpeta data
export const getFiles = () => fs.readdirSync(path.join(ROOT, 'data'))

export const getFilesBySlug = async ({ slug }) => {
	// lee el contenido de un archivo de la carpeta data
	const mdxSource = slug
		? fs.readFileSync(path.join(ROOT, 'data', `${slug}.mdx`), 'utf-8')
		: fs.readFileSync(path.join(ROOT, 'data', `hola-mundo.mdx`), 'utf-8')

	// transforma el contenido del archivo a un objecto
	const { content, data } = await matter(mdxSource)

	const source = await serialize(content, {})

	return {
		source,
		frontmatter: {
			...data,
			slug
		}
	}
}

// Lee los metadatas de los ficheros.
export const getAllFilesMetadata = () => {
	const files = getFiles()
	return files.reduce((allPosts, postSlug) => {
		const mdxSource = fs.readFileSync(path.join('data', postSlug), 'utf-8')
		const { data } = matter(mdxSource)
		return [
			{
				...data,
				slug: postSlug.replace('.mdx', ''),
				...allPosts
			}
		]
	}, [])
}
