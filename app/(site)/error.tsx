"use client"

import Image from "next/image"
import Link from "next/link"

const error = () => {
  return (
    <main className="grid h-full place-content-center justify-items-center bg-gray-main text-white">
    <Image
      src="/not-found.svg"
      width={60}
      height={60}
      alt="not found image"
    />
    <h1 className="mt-10 text-5xl font-bold">Something went wrong...</h1>
    <p className="mt-6 text-neutral-400">
      Click the link below to save yourself from this error!
    </p>
    <Link
      href="/"
      className="mt-10 rounded-full border border-neutral-400 px-7 py-3 font-bold transition ease-linear hover:scale-105 hover:border-neutral-600"
    >
      Home
    </Link>
  </main>
  )
}

export default error