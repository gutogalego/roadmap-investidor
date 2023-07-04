import { TopicProgressButton } from "~/components/TopicProgressButton";
import { type ReactNode, useState } from "react";
import Image from "next/image";
import React from "react";
import { type UserTopic, type Status } from "@prisma/client";

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
  progress: Status;
};

const getTopicProgress = (topicId: string, userTopics?: UserTopic[]): Status => {
    
    if(userTopics){
        for(const userTopic of userTopics){
            if (topicId == userTopic.topicId){
                return userTopic.status
            }
        }
    }
    
    return "PENDING";
}

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
        <TopicProgressButton topicId={props.topicId} progress={props.progress}/>
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

  return (
    <>
      <button
        className="flex h-20 max-w-xs flex-col items-center gap-4 rounded-xl bg-red-200 px-5 py-7 text-black hover:bg-blue-200"
        type="button"
        onClick={toggle}
      >
        <h5 className="text-xl font-bold ">{topic.title}</h5>
      </button>
      <Modal isOpen={isOpen} toggle={toggle} topicId={topic.id} progress={props.progress}>
        <div>{topic.body}</div>
      </Modal>
    </>
  );
};

export const Topics = (props: topicsProps) => {
  const topics = [];

  for (const topic of props.data) {
    const topicProgress = getTopicProgress(topic.id, props.userTopics)

    topics.push(<Topic topic={topic} progress={topicProgress}/>);
  }

  return <>{...topics}</>;
};
