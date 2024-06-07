import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1
          className={`text-3xl font-extrabold tracking-tight text-secondaryDark sm:text-6xl ${GreatVibes.className}`}
        >
          <span className="mr-4 text-primaryDark">Fancy</span> Driller
        </h1>
        <div className="flex w-full flex-col items-center gap-4 sm:grid-cols-2">
          <Link
            className="flex w-full max-w-sm flex-col gap-4 rounded-md border-2 p-4 text-center text-secondaryDark transition duration-200 ease-in-out hover:border-primary hover:text-primary active:scale-95"
            href="/drills"
          >
            <h3 className="text-xl">Choose Drill</h3>
          </Link>
          <Link
            className="flex w-full max-w-sm flex-col gap-4 rounded-md border-2 p-4 text-center text-secondaryDark transition duration-200 ease-in-out hover:border-primary hover:text-primary active:scale-95"
            href="/upload"
          >
            <h3 className="text-xl">Upload drill</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
