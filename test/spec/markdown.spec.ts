import { markdown } from '../../src'

describe('renderer', () => {
  it('should render headers', () => {
    const html = markdown.render(`
# This is level1

## This is level2

###### This level6
    `)

    expect(html).toMatchInlineSnapshot(`
"<h1 id=\\"this-is-level1\\">This is level1</h1>
<h2 id=\\"this-is-level2\\">This is level2</h2>
<h6 id=\\"this-level6\\">This level6</h6>
"
`)
  })
})

describe('renderer', () => {
  it('should render tables', () => {
    const html = markdown.render(`
| title | desc                  |
|-------|-----------------------|
| Dune  | one of the best books |
    `)

    expect(html).toMatchInlineSnapshot(`
"<table>
<thead>
<tr>
<th>title</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dune</td>
<td>one of the best books</td>
</tr>
</tbody>
</table>
"
`)
  })

  describe('renderer', () => {
    it('should render code', () => {
      const html = markdown.render(`
\`\`\`javascript
const var = 3
\`\`\`
      `)

      expect(html).toMatchInlineSnapshot(`
"<pre class=\\"language-javascript\\"><code class=\\"language-javascript\\"><span class=\\"token keyword\\">const</span> <span class=\\"token keyword\\">var</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3</span>
</code></pre>
"
`)
    })
  })

  describe('renderer', () => {
    it('should render md links', () => {
      const html = markdown.render(`
- [link1](./link.md)
- [link2](./README.md)
`)

      expect(html).toMatchInlineSnapshot(`
"<ul>
<li><a href=\\"link.html\\">link1</a></li>
<li><a href=\\"index.html\\">link2</a></li>
</ul>
"
`)
    })
  })

  describe('renderer', () => {
    it('should render footnotes', () => {
      const html = markdown.render(`
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.
      `)
      expect(html).toMatchInlineSnapshot(`
"<p>Here is a footnote reference,<sup class=\\"footnote-ref\\"><a href=\\"#fn1\\" id=\\"fnref1\\">[1]</a></sup> and another.<sup class=\\"footnote-ref\\"><a href=\\"#fn2\\" id=\\"fnref2\\">[2]</a></sup></p>
<hr class=\\"footnotes-sep\\">
<section class=\\"footnotes\\">
<ol class=\\"footnotes-list\\">
<li id=\\"fn1\\" class=\\"footnote-item\\"><p>Here is the footnote. <a href=\\"#fnref1\\" class=\\"footnote-backref\\">↩︎</a></p>
</li>
<li id=\\"fn2\\" class=\\"footnote-item\\"><p>Here's one with multiple blocks.</p>
<p>Subsequent paragraphs are indented to show that they
belong to the previous footnote. <a href=\\"#fnref2\\" class=\\"footnote-backref\\">↩︎</a></p>
</li>
</ol>
</section>
"
`)
    })
  })

  // describe('renderer', () => {
  //   it('should render xxx', () => {
  //     const html = markdown.render(`
  //# mardown
  //`)
  //     expect(html).toMatchInlineSnapshot()
  //   })
  // })
})
