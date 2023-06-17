import { type NextPage } from "next";
import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <main className="">
          <div className="grid grid-cols-12  flex-col items-center justify-center gap-12 border-b bg-red-300 px-4 py-16">
            <div className="col-span-3" />
            <div className="container relative col-span-4 flex bg-green-200 py-5 sm:py-12">
              <h3 className="flex text-3xl font-bold tracking-tight text-slate-900">
                Renda Fixa
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-gray-50 pt-4 sm:pt-12">
            <button className="col-span-1 flex max-w-xs flex-col items-center gap-4 rounded-xl bg-red-200 px-5 py-7 text-black hover:bg-blue-200">
              <h5 className="text-xl font-bold ">Renda Fixa</h5>
            </button>
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default Home;
