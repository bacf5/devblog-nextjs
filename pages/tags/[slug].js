import Head from 'next/head';
import { getAllPosts } from '../../src/api';
import Articles from '../../src/components/Articles';

export default function TagPage({ slug, posts }) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <div className="flex justify-center">
        <h1 className="text-lg">
          • You are seeing all the posts with the tag:{' '}
          <h2 className="text-sm text-center underline decoration-sky-500 decoration-wavy">
            {slug}
          </h2>
        </h1>
      </div>
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
