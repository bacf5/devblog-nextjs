import Head from 'next/head';
import { getAllPosts } from '../../src/api';
import Articles from '../../src/components/Articles';

export default function TagPage({ slug, posts }) {
  console.log(slug, posts);
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h1>Tag: {slug}</h1>
      <Articles posts={posts} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));
  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
