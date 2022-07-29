import Link from 'next/link';

const HomeLayout = ({ page }) => {
  return (
    <div data-sb-object-id={page.__id}>
      {renderTitle(page.title)}
      {renderLink(page.link)}
    </div>
  );
};

const renderTitle = (title) => {
  if (!title) {
    return null;
  }
  return <h1 data-sb-field-path=".title">{title}</h1>;
};

const renderLink = (link) => {
  if (!link) {
    return null;
  }
  return (
    <Link href={link.url}>
      <a data-sb-field-path=".link.url#@href .link.label">{link.label}</a>
    </Link>
  );
};

export default HomeLayout;
