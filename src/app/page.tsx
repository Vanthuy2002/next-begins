import Link from 'next/link';
const getUUID = (): string => crypto.randomUUID();

export default function Home() {
  return (
    <main className='App'>
      <header className='flex items-center gap-3 p-3'>
        <Link className='px-6 py-3 text-white bg-blue-400 rounded-md' href='/'>
          Home
        </Link>
        <Link
          className='px-6 py-3 text-white bg-blue-400 rounded-md'
          href='/blog'
        >
          Blog
        </Link>
        <Link
          className='px-6 py-3 text-white bg-blue-400 rounded-md'
          href={`/blog/${getUUID()}`}
        >
          Blog Details
        </Link>
        <Link
          className='px-6 py-3 text-white bg-blue-400 rounded-md'
          href={`/images/uuid/${getUUID()}`}
        >
          Images Details
        </Link>
      </header>
      <h1 className='font-bold text-[20px]'>Home Pages</h1>
    </main>
  );
}
