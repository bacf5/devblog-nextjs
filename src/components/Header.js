import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-center">
        <Image src="/logo-blog.png" width={210} height={135} alt="logo-blog" />
      </nav>
    </>
  );
}
