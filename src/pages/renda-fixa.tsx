import { type NextPage } from "next";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";

const Home: NextPage = () => {

  return (
    <>
      <PageLayout>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          RENDA FIXA
        </h1>
      </PageLayout>
    </>
  );
};

export default Home;
