import Link from 'next/link';

const HomePage = ({ page }) => {
  return (
    <div>
      {page.title && <h1>{page.title}</h1>}
      {page.link && <Link href={page.link.url}>{page.link.label}</Link>}
    </div>
  );
};

export default HomePage;
