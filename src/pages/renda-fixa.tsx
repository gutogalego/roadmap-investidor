import { type NextPage } from "next";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";
import { useState } from "react";
import { useSession } from "next-auth/react";
import fixtures from "~/data/renda-fixa.json";
import React from "react";
import { Topics } from "~/components/Topics";
import { type Session } from "next-auth";

const getUserTopics = (sessionData: Session) => {
  const { data: userTopicsData, isLoading } =
    api.userTopic.getTopicsByUserID.useQuery({
      userId: sessionData.user.id,
    });
  return userTopicsData;
};

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const [isOpen, setisOpen] = useState(false);

  const userTopicsData = sessionData ? getUserTopics(sessionData) : [];

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <PageLayout>
      <main>
        <div className="grid grid-cols-12  flex-col items-center justify-center gap-12 border-b px-4">
          <div className="col-span-3" />
          <div className="container relative col-span-6 flex  py-5 sm:py-12">
            <div className="mb-3 mt-0 sm:mb-4 sm:mt-4">
              <h3 className="flex text-3xl font-bold tracking-tight text-slate-900">
                Renda Fixa
              </h3>
              <p className="text-sm text-gray-500 sm:text-lg">
                Topicos para estudo sobre renda fixa.
              </p>
            </div>
          </div>
        </div>
        <div className="grid h-screen grid-cols-6 content-start gap-4 bg-gray-50 px-5 pt-4 sm:pt-12">
          <Topics
            isOpen={isOpen}
            toggle={toggle}
            userTopics={userTopicsData}
            data={fixtures.data}
          />
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
