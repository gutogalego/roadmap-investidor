import type { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginComponent = () => {
  const { data: sessionData } = useSession();

  if (sessionData) {
    return (
      <button
        className="flex h-8 w-28 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-slate-600 to-slate-500 px-4 py-2 text-sm font-medium text-white transition-opacity duration-300 hover:from-gray-500 hover:to-gray-600"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        Logout
      </button>
    );
  }

  return (
    <Link
      className="flex h-8 w-28 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 px-4 py-2 text-sm font-medium text-white transition-opacity duration-300 hover:from-amber-500 hover:to-amber-600"
      href="/login"
    >
      Login
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="border-b-2 bg-slate-900 py-5 text-white sm:py-8">
      <nav className="container flex items-center justify-between px-12 sm:grid-cols-3 ">
        <Link
          className="flex items-center text-lg font-medium text-white"
          href="/"
        >
          <Image
            src={"/money-white.svg"}
            alt="Home"
            className="h-8 w-8 fill-white"
            width={0}
            height={0}
          />
        </Link>
        <LoginComponent />
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
