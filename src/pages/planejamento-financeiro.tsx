import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/planejamento.json";
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
      headTitle="Planejamento Financeiro"
      headDescription="Topicos sobre planejamento financeiro para estudos."
      title="Planejamento Financeiro"
      description="Topicos para estudo sobre planejamento financeiro."
    />
  );
};

export default Home;
