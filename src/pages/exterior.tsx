import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/exterior.json";
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
      headTitle="Investimento no Exterior"
      headDescription="Topicos sobre investimento no exterior para estudos."
      title="Investimento no Exterior"
      description="Topicos para estudo sobre investimento no exterior."
    />
  );
};

export default Home;
