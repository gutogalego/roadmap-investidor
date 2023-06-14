import { type NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-indigo-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Roadmap para <span className="text-indigo-300">INVESTIDORES</span>
          </h1>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
            <Link
              className="flex max-w-xs flex-col items-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/renda-fixa"
            >
              <h3 className="text-2xl font-bold ">Renda Fixa</h3>{" "}
            </Link>

            <Link
              className="flex max-w-xs flex-col items-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/renda-variavel"
            >
              <h3 className="mx-auto text-2xl font-bold">Renda Variavel</h3>
            </Link>

            <Link
              className="flex max-w-xs flex-col flex-nowrap gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/renda-fixa"
            >
              <h3 className="whitespace-normal text-2xl font-bold">
                Criptomoedas
              </h3>
            </Link>
          </div>
        </div>
      </main>

      {/* <AuthShowcase /> */}
    </PageLayout>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
