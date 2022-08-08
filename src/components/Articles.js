import Link from 'next/link';

export default function Articles({ posts }) {
  return (
    <ul className="text-lg list-none -m-2">
      {posts.map((post) => (
        <li key={post.slug} className="text-center">
          <div className="p-4 -mb-4">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <p className="text-sm">{post.excerpt}</p>
          <p className="text-xs -mt-2">
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
