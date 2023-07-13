import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import type { topic } from "~/components/Topics";

export function useTopic(topic: topic) {
  const { data: sessionData } = useSession();
  if (sessionData) {
    return api.userTopic.getUserTopicById.useQuery(
      {
        topicId: topic.id,
        userId: sessionData.user.id,
      },
      {
        initialData: topic,
      }
    );
  }
  return {
    data: topic,
    isLoading: false,
  };
}
