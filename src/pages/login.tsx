import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import { PageLayout } from "~/components/layout";
import Image from "next/image";

export default function SignIn({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <PageLayout>
      <main className="flex  items-center flex-col justify-center gap-12 px-4 py-16">
        <div key={"Google"}>
          <button
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={() => void signIn("google")}
          >
            <Image
              src={"/Google.svg"}
              alt="Google"
              className="h-6 w-6 fill-white"
              width={0}
              height={0}
            />
            Fazer login com o Google
          </button>
        </div>
      </main>
    </PageLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
