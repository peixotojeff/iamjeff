import dynamic from 'next/dynamic';

const IndexPage = dynamic(() => import('./index.mdx'), {
  ssr: false, // Desativa SSR para esta página
});

export default IndexPage;