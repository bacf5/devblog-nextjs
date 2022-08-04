import Link from 'next/link';

export default function Articles({ posts }) {
  return (
    <ul className="text-lg">
      {posts.map((post) => (
        <li key={post.slug} className="text-center list-none">
          <div className="p-6">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <p className="text-sm">{post.excerpt}</p>
          <p className="text-xs p-2 text-slate-600">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {`${tag}. `}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
