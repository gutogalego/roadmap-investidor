import type { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginComponent = () => {
  const { data: sessionData } = useSession();

  if (sessionData){
    return <div>LOGGED IN</div>
  }

  return (
    <ul className="hidden items-center gap-5 sm:flex">
      <li>
        <Link
          className="flex text-xl text-gray-400 hover:text-white"
          href="/login"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          className="flex text-xl text-gray-400 hover:text-white"
          href="/login"
        >
          Signup
        </Link>
      </li>
    </ul>
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
