# Dev blog journey

This is the source code of my personal [blog](https://blog-bacf.vercel.app) deployed on Vercel.

## Tech

- Built with [Nextjs](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), MDX and syntax highlighting.
- SEO with next-sitemap.
- Each tag page is automatically generated as static HTML + JSON (uses `getStaticProps()`)

## Design

- Every component is found under `./src/components`
- All MDX blog posts are found under `./posts`
- All images are under `./public/images` and uses the built-in `Image` component from Nextjs
