import Image from 'next/image';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import { getPostFromSlug, getSlugs } from '../../src/api';
import Youtube from '../../src/components/Youtube.js';
import 'highlight.js/styles/atom-one-dark.css';

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg p-7 -mt-8">
        <h1 className="text-center text-xl mb-2 font-semibold underline">
          {post.meta.title}
        </h1>
        <MDXRemote {...post.source} components={{ Youtube, Image }} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
