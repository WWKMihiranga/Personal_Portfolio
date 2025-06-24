import { getPostContent, getAllPostSlugs, getPostBySlug } from '@/lib/mdx'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  const title = post.metadata.title
  const description = post.metadata.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://my-portfolio.vercel.app/blog/${params.slug}`,
      images: ['/images/og-cover.png']
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: ['/images/og-cover.png']
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { mdxSource, metadata } = await getPostContent(params.slug)

  return (
    <article className="p-8 max-w-3xl mx-auto prose prose-blue">
      <h1>{metadata.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{metadata.date}</p>
      <MDXRemote source={mdxSource} />
    </article>
  )
}
