import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button style={{fontSize: 50}}>About</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
