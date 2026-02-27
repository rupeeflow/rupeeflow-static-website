import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"

// 👇 tell Next which pages to build
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/data/blogcontent")
  const files = fs.readdirSync(dir)

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const filePath = path.join(
    process.cwd(),
    "src/data/blogcontent",
    `${slug}.mdx`
  )

  const source = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(source)

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-white">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
      <MDXRemote source={content} />
    </div>
  )
}
