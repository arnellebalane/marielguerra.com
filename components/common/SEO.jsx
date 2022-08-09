import Head from 'next/head';

const SEO = ({ page }) => {
  const propertyMetas = {
    'og:title': page.metaTitle || 'Mariel Guerra',
    'og:description': page.metaDescription || 'Video Editor, Designer',
    'og:image':
      process.env.NEXT_PUBLIC_SITE_URL + (page.socialImage || '/thumbnail.jpg'),
    'og:url': process.env.NEXT_PUBLIC_SITE_URL + page.__url,
    'og:type': 'website',
  };
  const nameMetas = {
    'twitter:card': 'summary_large_image',
  };
  const prefixWithSiteUrl = ['og:image', 'og:url'];

  page.metaTags?.forEach(({ property, content }) => {
    const metas = property in propertyMetas ? propertyMetas : nameMetas;
    if (prefixWithSiteUrl.includes(property)) {
      content = process.env.NEXT_PUBLIC_SITE_URL + content;
    }
    metas[property] = content;
  });

  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <title>{propertyMetas['og:title']}</title>

      {Object.entries(propertyMetas).map(([property, content], index) => (
        <meta key={index} property={property} content={content} />
      ))}
      {Object.entries(nameMetas).map(([name, content], index) => (
        <meta key={index} name={name} content={content} />
      ))}
    </Head>
  );
};

export default SEO;
