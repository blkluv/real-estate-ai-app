import Head from 'next/head';
import { useRouter } from 'next/router';

export type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
};

export const Seo = ({ title, description, image, url, type }: SeoProps) => {
  const router = useRouter();
  const { pathname } = router;

  const seo = {
    title: title || 'Real Estate AI Generator',
    description:
      description || 'Generate your real estate property description in seconds.',
    image: image || 'aire.luvnft.com/og-image.png',
    url: url || `aire.luvnft.com${pathname}`,
    type: type || 'website',
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};
