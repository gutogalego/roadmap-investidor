import { type NextPage } from "next";
import { PageLayout } from "~/components/layout";
import CardLink from "~/components/CardLink";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-indigo-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Roadmap para <span className="text-indigo-300">INVESTIDORES</span>
          </h1>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-4">
            <CardLink
              link="/intro"
            >Introdução aos Investimentos</CardLink>
            <CardLink
              link="/renda-fixa"
            >Investimentos de Renda Fixa</CardLink>
            <CardLink
              link="/renda-variavel"
            >Investimentos de Renda Variavel</CardLink>
            <CardLink
              link="/fundos"
            >Fundos de Investimento</CardLink>
            <CardLink
              link="/fiis"
            >FIIs</CardLink>
            <CardLink
              link="/exterior"
            >Investimentos no Exterior</CardLink>
            <CardLink
              link="/planejamento-financeiro"
            >Planejamento Financeiro</CardLink>
            <CardLink
              link="/psicologia"
            >Psicologia dos Investimentos</CardLink>
            <CardLink
              link="/aspectos-legais"
            >Aspectos Legais e Tributários</CardLink>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
