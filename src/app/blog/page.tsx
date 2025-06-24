import Link from 'next/link'
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx'

export default function BlogPage() {
  const slugs = getAllPostSlugs()
  const posts = slugs.map(slug => ({
    slug,
    ...getPostBySlug(slug).metadata
  })) as { slug: string; title: string; date: string; description: string }[]

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-xl font-semibold group-hover:underline">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-1 text-gray-700">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
