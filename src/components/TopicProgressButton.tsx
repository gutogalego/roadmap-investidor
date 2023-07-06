import Image from "next/image";
import { useState } from "react";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { Status } from "@prisma/client";

type TopicProgressButtonProps = {
  topicId: string;
  progress: Status;
};

const statusColors: Record<Status, string> = {
  DONE: "bg-green-500",
  IN_PROGRESS: "bg-yellow-500",
  PENDING: "bg-gray-300",
  SKIP: "bg-black",
};

export const translateProgress = (progress: Status) => {
  const translated = {
    DONE: "Completo",
    IN_PROGRESS: "Em Progresso",
    PENDING: "Pendente",
    SKIP: "Pular",
  };
  return translated[progress];
};

export const TopicProgressButton = (props: TopicProgressButtonProps) => {
  const { topicId } = props;
  const { data: sessionData } = useSession();

  const [showChangeStatus, setShowChangeStatus] = useState(false);

  const { mutate, isLoading: isPosting } = api.userTopic.create.useMutation({});

  const handleUpdateResourceProgress = (progress: Status) => {
    if (sessionData) {
      mutate({
        topicId: topicId,
        userId: sessionData.user.id,
        status: progress,
      });
    }
    setShowChangeStatus(false);
  };

  return (
    <div className="relative inline-flex rounded-md border border-gray-300">
      <span className="inline-flex cursor-default items-center  p-1 px-2 text-sm text-black">
        <span className="flex h-2 w-2">
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              statusColors[props.progress]
            }`}
          ></span>
        </span>
        <span className="ml-2 capitalize">
          {translateProgress(props.progress)}
        </span>
      </span>
      <button
        className="inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200"
        onClick={() => setShowChangeStatus(!showChangeStatus)}
      >
        <span className="mr-0.5">Status</span>{" "}
        <Image
          src={"/down.status.svg"}
          alt="close"
          className="h-3 w-3 fill-white"
          width={0}
          height={0}
        />
      </button>
      {showChangeStatus && (
        <div className="absolute right-0 top-full mt-1 flex min-w-[120px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md">
          <button
            className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleUpdateResourceProgress(Status.DONE)}
          >
            <span>
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${
                  statusColors[Status.DONE]
                }`}
              ></span>
              {translateProgress(Status.DONE)}
            </span>
          </button>

          <button
            className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleUpdateResourceProgress(Status.IN_PROGRESS)}
          >
            <span>
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${
                  statusColors[Status.IN_PROGRESS]
                }`}
              ></span>
              {translateProgress(Status.IN_PROGRESS)}
            </span>
          </button>

          <button
            className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleUpdateResourceProgress(Status.PENDING)}
          >
            <span>
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${
                  statusColors[Status.PENDING]
                }`}
              ></span>
              Resetar
            </span>
          </button>

          <button
            className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleUpdateResourceProgress(Status.SKIP)}
          >
            <span>
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${
                  statusColors[Status.SKIP]
                }`}
              ></span>
              {translateProgress(Status.SKIP)}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
