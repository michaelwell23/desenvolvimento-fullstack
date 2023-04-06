import { useRouter } from 'next/router';

function produtos() {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <h1>Produtos</h1>
      <p>{router.query.products}</p>
    </div>
  );
}

export default produtos;
