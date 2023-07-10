import { type NextPage } from "next";
import { TopicPage } from "~/components/TopicPage";
import fixtures from "~/data/renda-fixa.json";
import React from "react";

const Home: NextPage = () => {
  return (
    <TopicPage fixturesData={fixtures.data}>
      <h3 className="flex text-3xl font-bold tracking-tight text-slate-900">
        Renda Fixa
      </h3>
      <p className="text-sm text-gray-500 sm:text-lg">
        Topicos para estudo sobre renda fixa.
      </p>
    </TopicPage>
  );
};

export default Home;
