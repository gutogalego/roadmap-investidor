import { type NextPage } from "next";
import Link from "next/link";
import { PageLayout } from "~/components/layout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-indigo-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Roadmap para <span className="text-indigo-300">INVESTIDORES</span>
          </h1>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-4">
            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/intro"
            >
              <h3 className="text-2xl font-bold ">
                Introdução aos Investimentos
              </h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/renda-fixa"
            >
              <h3 className="text-2xl font-bold ">
                Investimentos de Renda Fixa
              </h3>
            </Link>

            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/renda-variavel"
            >
              <h3 className="mx-auto text-2xl font-bold">
                Investimentos de Renda Variavel
              </h3>
            </Link>

            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/fundos"
            >
              <h3 className="whitespace-normal text-2xl font-bold">
                Fundos de Investimento
              </h3>
            </Link>

            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/fiis"
            >
              <h3 className="whitespace-normal text-2xl font-bold">FIIs</h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/exterior"
            >
              <h3 className="whitespace-normal text-2xl font-bold">
                Investimentos no Exterior
              </h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/planejamento-financeiro"
            >
              <h3 className="whitespace-normal text-2xl font-bold">
                Planejamento Financeiro
              </h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/psicologia"
            >
              <h3 className="whitespace-normal text-2xl font-bold">
                Psicologia dos Investimentos
              </h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
              href="/aspectos-legais"
            >
              <h3 className="whitespace-normal text-2xl font-bold">
                Aspectos Legais e Tributários
              </h3>
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
