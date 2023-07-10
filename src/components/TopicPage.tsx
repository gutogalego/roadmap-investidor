import type { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";
import { useState } from "react";
import React from "react";
import { Topics } from "~/components/Topics";
import { type Session } from "next-auth";
import { type topic } from "~/components/Topics";

const getUserTopics = (sessionData: Session | null) => {
  const { data: userTopicsData, isLoading } =
    api.userTopic.getTopicsByUserID.useQuery({
      userId: sessionData?.user.id || "no_user",
    });
  return userTopicsData;
};

type TopicPageProps = {
  fixturesData: topic[];
  children?: ReactNode | undefined;
};

export const TopicPage = (props: TopicPageProps) => {
  const { data: sessionData } = useSession();
  const [isOpen, setisOpen] = useState(false);

  let userTopicsData = getUserTopics(sessionData);

  if (!sessionData) {
    userTopicsData = [];
  }

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <PageLayout>
      <main>
        <div className="grid grid-cols-12  flex-col items-center justify-center gap-12 border-b px-4">
          <div className="col-span-3" />
          <div className="container relative col-span-6 flex  py-5 sm:py-12">
            <div className="mb-3 mt-0 sm:mb-4 sm:mt-4">{props.children}</div>
          </div>
        </div>
        <div className="grid h-screen grid-cols-6 content-start gap-4 bg-gray-50 px-5 pt-4 sm:pt-12">
          <Topics
            isOpen={isOpen}
            toggle={toggle}
            userTopics={userTopicsData}
            data={props.fixturesData}
          />
        </div>
      </main>
    </PageLayout>
  );
};
