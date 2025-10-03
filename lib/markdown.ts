import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm' // ← Github-flavored markdown (tables, checkboxes, etc.)
import remarkBreaks from 'remark-breaks' // ← Handle newlines correctly

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm) // ← Add this
    .use(remarkBreaks) // ← Add this
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor-link']
      }
    })
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
