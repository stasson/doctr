import { render } from '../../src'

describe('renderer', () => {
  it('should render headers', () => {
    const html = render(`
    # This is HTML
    `)

    expect(html).toMatchInlineSnapshot(`
"
<html>
  <link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css\\">
  <link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/themes/prism.min.css\\">
  <style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
  </style>
  <body class=\\"markdown-body\\">
    <pre><code># This is HTML
</code></pre>

    <script src=\\"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-typescript.min.js\\"></script>
  </body>
</html>
  "
`)
  })
})