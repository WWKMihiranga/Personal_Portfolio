
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPostSlugs() {
  return fs.readdirSync(BLOG_DIR).map(filename => filename.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, slug + '.mdx'), 'utf-8')
  const { data, content } = matter(raw)
  return { metadata: data, content }
}

export async function getPostContent(slug: string) {
  const { metadata, content } = getPostBySlug(slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    }
  })

  return { mdxSource, metadata }
}
