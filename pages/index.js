import Head from 'next/head';
import Image from 'next/image';
import { getAllPosts, PostMeta } from '../src/api';
import Articles from '../src/components/Articles';

export default function Home({ posts: posts }) {
  return (
    <>
      <nav className="flex items-center justify-center">
        <span className=" ">
          <Image
            src="/logo-blog.png"
            width={190}
            height={125}
            alt="logo-blog"
            className=""
          />
        </span>
      </nav>

      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg p-7">
        <h1>Articles</h1>
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
