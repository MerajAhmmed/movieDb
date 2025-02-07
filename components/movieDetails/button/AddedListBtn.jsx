import Link from "next/link";

export default function AddedListBtn() {
  return (
    <Link
      href="/login"
      className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 12l5 5l10 -10" />
        <path d="M2 12l5 5m5 -5l5 -5" />
      </svg>
      Added to Wacth List
    </Link>
  );
}
