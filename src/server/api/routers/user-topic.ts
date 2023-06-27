import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import { TRPCError } from "@trpc/server";

import type { UserTopic } from "@prisma/client";

export const userTopicRouter = createTRPCRouter({

  getTopicsByUserID: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx, input }) =>
      ctx.prisma.userTopic
        .findMany({
          where: {
            userId: input.userId,
          },
          take: 200
        })
    ),

  create: publicProcedure
    .input(z.object({ topicId: z.string().min(1), userId: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const userTopicId = `${input.topicId}#${input.userId}`;
      const userTopic = await ctx.prisma.userTopic.upsert({
        where: { id: userTopicId },
        update: { status: "upserted" },
        create: {
          id: userTopicId,
          userId: input.userId,
          status: "test",
        },
      });

      return userTopic;
    }),
});
