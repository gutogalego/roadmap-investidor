import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/introducao.json";
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
      headTitle="Introdução aos investimentos"
      headDescription="Topicos sobre introdução aos investimentos para estudos."
      title="Introdução aos investimentos"
      description="Topicos para estudo sobre introdução aos investimentos."
    />
  );
};

export default Home;
