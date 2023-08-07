import { type NextPage } from "next";
import { PageLayout } from "~/components/layout";
import TopicPageLink from "~/components/TopicPageLink";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-indigo-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Roadmap para <span className="text-indigo-300">INVESTIDORES</span>
          </h1>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-4">
            <TopicPageLink
              link="/intro"
            >Introdução aos Investimentos</TopicPageLink>
            <TopicPageLink
              link="/renda-fixa"
            >Investimentos de Renda Fixa</TopicPageLink>
            <TopicPageLink
              link="/renda-variavel"
            >Investimentos de Renda Variavel</TopicPageLink>
            <TopicPageLink
              link="/fundos"
            >Fundos de Investimento</TopicPageLink>
            <TopicPageLink
              link="/fiis"
            >FIIs</TopicPageLink>
            <TopicPageLink
              link="/exterior"
            >Investimentos no Exterior</TopicPageLink>
            <TopicPageLink
              link="/planejamento-financeiro"
            >Planejamento Financeiro</TopicPageLink>
            <TopicPageLink
              link="/psicologia"
            >Psicologia dos Investimentos</TopicPageLink>
            <TopicPageLink
              link="/aspectos-legais"
            >Aspectos Legais e Tributários</TopicPageLink>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
