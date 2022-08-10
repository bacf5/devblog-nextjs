import Head from 'next/head';
import { getAllPosts } from '../src/api';
import Articles from '../src/components/Articles';

export default function Home({ posts: posts }) {
  return (
    <>
      <Head>
        <title>Dev blog!</title>
      </Head>
      <div className="text-center -mt-8 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg p-8">
        <h1 className="text-xl text-slate-700 -mt-3 font-semibold text-left">
          /articles
        </h1>
        <Articles posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
