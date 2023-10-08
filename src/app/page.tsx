import Head from "next/head";
import Link from "next/link";

import "./main.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Musings</title>
        <meta name="description" content="DragonCodes musings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Musings of a bored developer
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/musings/tree-structure"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Tree Structure</h3>
              <div className="text-lg">Folder structure in React</div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/musings/resume-templater"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Resume template clone</h3>
              <div className="text-lg">
                A2 clone of a resume template I found online
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
