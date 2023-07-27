import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/renda-variavel.json";
import React from "react";
import { type topic } from "~/components/Topics";

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
      headTitle="Renda Variavel"
      headDescription="Topicos sobre renda variavel para estudos."
      title="Renda Variavel"
      description="Topicos para estudo sobre renda variavel."
    />
  );
};

export default Home;
