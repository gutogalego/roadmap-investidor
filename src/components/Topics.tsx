import { TopicProgressButton } from "~/components/TopicProgressButton";
import { type ReactNode, useState } from "react";
import Image from "next/image";
import React from "react";
import { type UserTopic, Status } from "@prisma/client";
import ReactMarkdown from "react-markdown";
import { useTopic } from "~/hooks/useTopic";

export type topic = {
  id: string;
  title: string;
  body: string;
  status?: Status;
};

type modalProps = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  topicId: string;
  progress: Status;
};

type topicsProps = {
  isOpen: boolean;
  toggle: () => void;
  data: topic[];
  userTopics?: UserTopic[];
};

type topicProps = {
  topic: topic;
};

const topicColorClasses: Record<Status, string> = {
  DONE: "bg-gray-400 line-through",
  IN_PROGRESS: "bg-purple-300 underline",
  PENDING: "bg-yellow-500 hover:bg-yellow-400",
  SKIP: "bg-teal-800 line-through",
};

//use state enabled/disabled triggered by renda fica button
const Modal = (props: modalProps) => {
  const modal = (
    <div
      className="fixed left-0 top-0 h-full w-full items-center bg-slate-900 bg-opacity-70"
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
        <TopicProgressButton
          topicId={props.topicId}
          progress={props.progress}
        />
        {props.children}
      </div>
    </div>
  );

  return <>{props.isOpen && modal}</>;
};

const Topic = (props: topicProps) => {
  const topic = props.topic;
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  const { data, isLoading } = useTopic(topic);

  if (isLoading) {
    return <></>;
  }
  const status: Status = data?.status || Status.PENDING;

  return (
    <div className="h-20 w-full ">
      <button
        className={`flex h-20 w-full max-w-xs flex-col justify-center rounded-xl py-7 text-black ${topicColorClasses[status]}`}
        type="button"
        onClick={toggle}
      >
        <h5 className="self-center text-xl font-bold">{topic.title}</h5>
      </button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        topicId={topic.id}
        progress={status}
      >
        <div className="mkdown mt-3">
          <ReactMarkdown>{topic.body}</ReactMarkdown>
        </div>
      </Modal>
    </div>
  );
};

export const Topics = (props: topicsProps) => {
  const topics = [];

  for (const topic of props.data) {
    topics.push(<Topic topic={topic} key={topic.id} />);
  }

  return <>{...topics}</>;
};
