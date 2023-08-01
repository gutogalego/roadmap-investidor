import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/psicologia.json";
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
      headTitle="Psicologia dos Investimentos"
      headDescription="Topicos sobre psicologia dos investimentos para estudos."
      title="Psicologia dos Investimentos"
      description="Topicos para estudo sobre psicologia dos investimentos."
    />
  );
};

export default Home;
