import { GenerationForm } from '@/components/GenerationForm';
import { IconBadge } from '@/components/IconBadge';
import { Seo } from '@/components/Seo';
import { MainLayout } from '@/layouts';
import CountUp from 'react-countup';
import { Toaster } from 'react-hot-toast';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Real Estate AI Generator" />
      <IconBadge
        icon="github"
        text="Check on github"
        className="mb-5"
        href="https://github.com"
      />
      <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
        Generate your real estate description using ChatGPT
      </h1>
      <p className="mt-5 text-slate-500">
        <CountUp start={35} end={100} duration={2} /> houses description generated so far.
      </p>
      <Toaster />
      <GenerationForm className="mt-5" />
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
