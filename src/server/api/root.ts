import { createTRPCRouter } from "~/server/api/trpc";
import { userTopicRouter } from "~/server/api/routers/user-topic"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    userTopic: userTopicRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
