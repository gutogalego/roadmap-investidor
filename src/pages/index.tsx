import { type NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <PageLayout>
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
        <p className="text-2xl text-white">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
      </PageLayout>
    </>
  );
};

export default Home;
