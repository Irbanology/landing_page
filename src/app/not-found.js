"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      
      <h1 className="text-[72px] font-bold text-[#FE5800] mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-3">
        Page Not Found
      </h2>

      <p className="text-white/70 max-w-[420px] mb-8">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-block bg-[#FE5800] hover:bg-[#ff6a1a] transition px-8 py-3 rounded-full text-sm font-semibold"
      >
        Go back Home
      </Link>
    </div>
  );
}
