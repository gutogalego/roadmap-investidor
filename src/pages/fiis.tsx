import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/fiis.json";
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
      headTitle="FIIs"
      headDescription="Topicos sobre FIIs para estudos."
      title="Fundos de Investimento Imobiliário"
      description="Topicos para estudo sobre FIIs."
    />
  );
};

export default Home;
