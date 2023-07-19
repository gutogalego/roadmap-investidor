import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/renda-fixa.json";
import React from "react";
import { type topic } from "~/components/Topics";
import Head from "next/head";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      data: fixtures.data,
    },
  };
};

const Home: NextPage<{ data: topic[] }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Roadmap Investidor - Renda Fixa</title>
        <meta
          name="description"
          content="Topicos sobre renda fixa para estudos."
        />
      </Head>
      <TopicPage fixturesData={data}>
        <h3 className="flex text-3xl font-bold tracking-tight text-slate-900">
          Renda Fixa
        </h3>
        <p className="text-sm text-gray-500 sm:text-lg">
          Topicos para estudo sobre renda fixa.
        </p>
      </TopicPage>
    </>
  );
};

export default Home;
