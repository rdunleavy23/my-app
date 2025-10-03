import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)              // ✅ Parse Markdown to AST
    .use(remarkRehype)             // ✅ Convert to HTML AST
    .use(rehypeSlug)               // ✅ Adds id="..." to headings
    .use(rehypeAutolinkHeadings, { // ✅ Wraps headings with anchor links
      behavior: 'wrap',
      properties: {
        className: ['anchor-link']
      }
    })
    .use(rehypeStringify)          // ✅ Output to final HTML
    .process(markdown)

  return result.toString()
}
