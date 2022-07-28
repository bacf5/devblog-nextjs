import Head from 'next/head';
import Image from 'next/image';
import { getAllPosts, PostMeta } from '../src/api';

export default function Home() {
  return <div className="flex container justify-center text-xl">Articles</div>;
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: {} };
}
