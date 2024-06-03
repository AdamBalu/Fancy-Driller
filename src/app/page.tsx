import Link from "next/link";
import {Great_Vibes} from "next/font/google";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className={`text-3xl font-extrabold tracking-tight text-white sm:text-6xl ${GreatVibes.className}`}>
          <span className="text-[#9E1899] mr-4">Fancy</span> Driller
        </h1>
        <div className="flex flex-col gap-4 sm:grid-cols-2 w-full items-center">
          <Link
            className="flex w-full text-center max-w-sm flex-col gap-4 rounded-md p-4 text-white hover:text-[#9E1899] border-2 hover:border-[#FF00F5] transition duration-200 ease-in-out active:scale-95"
            href="/drills"
          >
            <h3 className="text-xl">Choose Drill</h3>
          </Link>
          <Link
            className="flex w-full text-center max-w-sm flex-col gap-4 rounded-md p-4 text-white hover:text-[#9E1899] border-2 hover:border-[#FF00F5] transition duration-200 ease-in-out active:scale-95"
            href="/upload"
          >
            <h3 className="text-xl">Upload drill</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
