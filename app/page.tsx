import Image from "next/image";

export default function Home() {
  return <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Notes App</h1>
            <a
              href="/notes"
              className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-white-300"
            >
              Go to Notes
            </a>
          </div>;
}
