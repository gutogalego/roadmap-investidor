import { type GetStaticProps, type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/aspectos-legais.json";
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
      headTitle="Aspectos Legais"
      headDescription="Topicos sobre aspectos legais dos investimentos para estudos."
      title="Aspectos Legais"
      description="Topicos para estudo sobre aspectos legais dos investimentos."
    />
  );
};

export default Home;
