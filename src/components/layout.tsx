import type { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-slate-900 py-5 text-white sm:py-8 border-b-2">
      <nav className="container flex items-center justify-between px-12 ">
        <Link
          className="flex items-center text-lg font-medium text-white"
          href="/"
        >
          <Image
            src={"/money-white.svg"}
            alt="Home"
            className="h-10 w-10 fill-white"
            width={56}
            height={56}
          />
        </Link>
        <ul className="hidden items-center justify-end gap-5 sm:flex">
          <li>
            <Link className="flex text-gray-400 hover:text-white text-xl" href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="flex text-gray-400 hover:text-white text-xl" href="/login">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-indigo-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {props.children}
        </div>
      </main>
    </>
  );
};
