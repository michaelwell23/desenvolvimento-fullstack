import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/about">Página About</Link>
      <br />
      <Link href="/category/products">Página Produto</Link>
    </div>
  );
};

export default Index;
