import { getFilesBySlug, getFiles } from '../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'

const Post = ({ source, frontmatter }) => {
    return <MDXRemote {...source} />
}

export default Post

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFilesBySlug({
        slug: params.slug
    })

    return {
        props: {
            source,
            frontmatter
        }
    }
}

export async function getStaticPaths() {
    const posts = await getFiles()
    const paths = posts.map(post => ({
        params: {
            slug: post.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false // si una ruta no se encuentra da un error 404
    }
}