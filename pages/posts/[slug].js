import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import { getPostFromSlug, getSlugs } from '../../src/api';
// import Youtube from '../../src/components';

export default function PostPage() {
  return (
    <>
      <Head>
        <title>Post Title</title>
      </Head>
      <h1>Post Title</h1>
    </>
  );
}

export async function GetStaticProps({ params }) {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content);

  console.log(mdxSource);

  return { props: {} };
}

export const GetStaticPaths = (async) => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
