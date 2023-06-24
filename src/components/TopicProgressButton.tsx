import Image from "next/image";
import { useState } from "react";

type ResourceProgressType = 'done' | 'learning' | 'pending' | 'skipped';

type TopicProgressButtonProps = {
  topicId: string;
}; 

const handleUpdateResourceProgress = (progress: ResourceProgressType) => {
    console.log(progress)
    return <></>
  };

export const TopicProgressButton = (props: TopicProgressButtonProps) => {
    const [showChangeStatus, setShowChangeStatus] = useState(false);
    

  return (
    <div className="relative inline-flex rounded-md border border-gray-300">
      <span className="inline-flex cursor-default items-center  p-1 px-2 text-sm text-black">
        <span className="flex h-2 w-2">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-300"></span>
        </span>
        <span className="ml-2 capitalize">pendente</span>
      </span>
      <button
        className="inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200"
        onClick={() => setShowChangeStatus(true)}
      >
        <span className="mr-0.5">Update Status</span>{" "}
        <Image
          src={"/down.status.svg"}
          alt="close"
          className="h-3 w-3 fill-white"
          width={0}
          height={0}
        />
      </button>
      {showChangeStatus && (
        <div
          className="absolute right-0 top-full mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md"
        >

            <button
              className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
              onClick={() => handleUpdateResourceProgress('done')}
            >
              <span>
                <span
                  className={`mr-2 inline-block h-2 w-2 rounded-full bg-green-500`}
                ></span>
                Done
              </span>
              <span className="text-xs text-gray-500">D</span>
            </button>


            <button
              className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
              onClick={() => handleUpdateResourceProgress('learning')}
            >
              <span>
                <span
                  className={`mr-2 inline-block h-2 w-2 rounded-full bg-yellow-500`}
                ></span>
                In Progress
              </span>

              <span className="text-xs text-gray-500">L</span>
            </button>


            <button
              className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
              onClick={() => handleUpdateResourceProgress('pending')}
            >
              <span>
                <span
                  className={`mr-2 inline-block h-2 w-2 rounded-full bg-gray-300`}
                ></span>
                Reset
              </span>
              <span className="text-xs text-gray-500">R</span>
            </button>


            <button
              className="inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100"
              onClick={() => handleUpdateResourceProgress('skipped')}
            >
              <span>
                <span
                  className={`mr-2 inline-block h-2 w-2 rounded-full bg-black`}
                ></span>
                Skip
              </span>
              <span className="text-xs text-gray-500">S</span>
            </button>

        </div>
      )}
    </div>
  );
};
