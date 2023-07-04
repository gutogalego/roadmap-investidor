import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Status } from "@prisma/client";

export const userTopicRouter = createTRPCRouter({
  getTopicsByUserID: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx, input }) =>
      ctx.prisma.userTopic.findMany({
        where: {
          userId: input.userId,
        },
        take: 200,
      })
    ),

  create: publicProcedure
    .input(
      z.object({
        topicId: z.string().min(1),
        userId: z.string().min(1),
        status: z.enum([Status.DONE, Status.IN_PROGRESS, Status.PENDING, Status.SKIP ]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userTopic = await ctx.prisma.userTopic.upsert({
        where: {
          topicId_userId: { topicId: input.topicId, userId: input.userId },
        },
        update: { status: input.status },
        create: {
          topicId: input.topicId,
          userId: input.userId,
          status: input.status,
        },
      });

      return userTopic;
    }),
});
