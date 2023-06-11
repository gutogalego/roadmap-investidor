import { type NextPage } from "next";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";
import { signIn, signOut, useSession } from "next-auth/react";


const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <PageLayout>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      </PageLayout>
    </>
  );
};

export default Home;
