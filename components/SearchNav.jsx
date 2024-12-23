"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchNav() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSeach(term) {
    const params = new URLSearchParams();

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input
      type="text"
      id="searchInput"
      placeholder="Search movies..."
      className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
      onChange={(e) => {
        handleSeach(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString}
    />
  );
}
