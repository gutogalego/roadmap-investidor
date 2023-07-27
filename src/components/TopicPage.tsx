import type { ReactNode } from "react";
import { PageLayout } from "~/components/layout";
import { useState } from "react";
import React from "react";
import { Topics } from "~/components/Topics";
import { type topic } from "~/components/Topics";
import { useTopics } from "~/hooks/useTopics";
import Head from "next/head";

type TopicPageProps = {
  fixturesData: topic[];
  headTitle: string;
  headDescription: string;
  title: string;
  description: string;
  children?: ReactNode | undefined;
};

export const TopicPage = (props: TopicPageProps) => {
  const [isOpen, setisOpen] = useState(false);

  const { data: userTopicsData } = useTopics();

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <PageLayout>
      <Head>
        <title>Roadmap Investidor - {props.headTitle}</title>
        <meta
          name="description"
          content={props.headDescription}
        />
      </Head>
      <main>
        <div className="grid grid-cols-12  flex-col items-center justify-center gap-12 border-b px-4">
          <div className="col-span-3" />
          <div className="container relative col-span-6 flex  py-5 sm:py-12">
            <div className="mb-3 mt-0 sm:mb-4 sm:mt-4">
              <h3 className="flex text-3xl font-bold tracking-tight text-slate-900">
                {props.title}
              </h3>
              <p className="text-sm text-gray-500 sm:text-lg">
                {props.description}
              </p>
              {props.children}
            </div>
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
