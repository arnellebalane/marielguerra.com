import Link from 'next/link';

const HomeLayout = ({ page }) => {
  return (
    <div data-sb-object-id={page.__id}>
      {page.title && <h1 data-sb-field-path=".title">{page.title}</h1>}
      {page.link && (
        <Link href={page.link.url}>
          <a data-sb-field-path=".link.url#@href .link.label">
            {page.link.label}
          </a>
        </Link>
      )}
    </div>
  );
};

export default HomeLayout;
