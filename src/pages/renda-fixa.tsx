import { type GetStaticProps, type NextPage } from "next";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";
import { TopicProgressButton } from "~/components/TopicProgressButton";
import { type ReactNode, useState } from "react";
import Image from "next/image";
import { generateSsgHelper } from "~/server/helpers/ssgHelper";
import { useSession } from "next-auth/react";
import fixtures from "~/data/renda-fixa.json";
import React, { Fragment } from "react";

type topic = {
  id: string;
  title: string;
  body: string;
};

type modalProps = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  topicId: string;
};

type topicsProps = {
  isOpen: boolean;
  toggle: () => void;
};

//use state enabled/disabled triggered by renda fica button
const Modal = (props: modalProps) => {
  const modal = (
    <div
      className="absolute top-0 h-full w-full items-center bg-slate-900 bg-opacity-70"
      onClick={props.toggle}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="float-right block h-full w-2/5 bg-slate-50 p-4"
      >
        <button
          type="button"
          id="close-topic"
          onClick={props.toggle}
          className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
        >
          <Image
            src={"/close-x.svg"}
            alt="close"
            className="h-5 w-5 fill-white"
            width={0}
            height={0}
          />
        </button>

        {/*comment. block below is supposed to be pending button*/}
        <TopicProgressButton topicId={props.topicId} />
        {/*comment. block above is supposed to be pending button*/}

        {props.children}
      </div>
    </div>
  );

  return <>{props.isOpen && modal}</>;
};

const Topics = (props: topicsProps) => {
  const topics = [];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: topic[] = fixtures.data;

  for (const topic of data) {
    const topicId = topic.id;
    topics.push(
      <>
        <button
          className="flex h-20 max-w-xs flex-col items-center gap-4 rounded-xl bg-red-200 px-5 py-7 text-black hover:bg-blue-200"
          type="button"
          onClick={props.toggle}
        >
          <h5 className="text-xl font-bold ">{topic.title}</h5>
        </button>
        <Modal isOpen={props.isOpen} toggle={props.toggle} topicId={topicId}>
          <div>O que é a selic?</div>
        </Modal>
      </>
    );
  }

  return <>{...topics}</>;
};

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const [isOpen, setisOpen] = useState(false);

  const { data: userTopicData, isLoading } =
    api.userTopic.getTopicsByUserID.useQuery({
      userId: sessionData ? sessionData.user.id : "no_user",
    });

  console.log(userTopicData);

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
        <div className="grid h-screen grid-cols-12 bg-gray-50 pt-4 sm:pt-12">
          <Topics isOpen={isOpen} toggle={toggle} />
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
