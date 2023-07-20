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
    <TopicPage
      fixturesData={data}
      headTitle="Renda Fixa"
      headDescription="Topicos sobre renda fixa para estudos."
      title="Renda Fixa"
      description="Topicos para estudo sobre renda fixa."
    />
  );
};

export default Home;
