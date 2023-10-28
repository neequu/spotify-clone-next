import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <body>
      <main className="grid h-screen w-screen place-content-center justify-items-center bg-gray-main text-white">
        <Image
          src="/not-found.svg"
          width={60}
          height={60}
          alt="not found image"
        />
        <h1 className="mt-10 text-5xl font-bold">Page not found</h1>
        <p className="mt-6 text-neutral-400">
          We can’t seem to find the page you are looking for.
        </p>
        <Link
          href="/"
          className="mt-10 rounded-full border border-neutral-400 px-7 py-3 font-bold transition ease-linear hover:scale-105 hover:border-neutral-600"
        >
          Home
        </Link>
      </main>
    </body>
  );
}
