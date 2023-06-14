import { type NextPage } from "next";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <main className="">
          <div className="grid grid-cols-12  items-center flex-col justify-center gap-12 px-4 py-16 bg-red-300 border-b">
            <div className="col-span-3"/>
            <div className="flex container relative py-5 sm:py-12 bg-green-200 col-span-4">
              <h3 className="flex text-3xl font-bold tracking-tight text-slate-900">
                Renda Fixa
              </h3>
            </div>
          </div>
          <div className="bg-gray-50 pt-4 sm:pt-12">
            
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default Home;
