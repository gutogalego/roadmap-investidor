import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

export function useTopics() {
  const { data: sessionData } = useSession();
  return api.userTopic.getTopicsByUserID.useQuery({
    userId: sessionData?.user.id || "no_user",
  });
}
