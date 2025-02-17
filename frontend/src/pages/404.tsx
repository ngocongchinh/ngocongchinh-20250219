/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  pure?: true;
};

const Page404: NextPageWithLayout = () => (
  <>
    <Head>
      <title>404 Page!</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <section className="text-base-black flex h-screen flex-col items-center justify-center bg-white">
      <div className="w-[365px] h-[170px] relative">
        <Image src={'/images/error-page.svg'} alt="Error" width={365} height={170} />
      </div>
      <h1 className="text-[45px] mb-2 pt-[24px] font-bold leading-[normal]">OOPS!</h1>
      <div className="text-[20px] mb-[30px] text-center text-base font-normal leading-[normal] tracking-[-0.1px]">
        We couldn’t find what you looking for.
      </div>
      <div className="grid justify-center">
        <a
          href="/"
          className="2md:text-[18px] text-center bg-black 2md:w-[186px] mb-3 w-[295px] rounded-[10px] bg-primary px-6 py-3.5 text-base font-semibold leading-[normal] text-white"
        >
          Go to homepage
        </a>
      </div>
    </section>
  </>
);

Page404.pure = true;

export default Page404;
