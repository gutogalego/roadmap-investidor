import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/fundos.json";
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
      headTitle="Fundos de Investimento"
      headDescription="Topicos sobre fundos de investimento para estudos."
      title="Fundos de Investimento"
      description="Topicos para estudo sobre fundos de investimento."
    />
  );
};

export default Home;
