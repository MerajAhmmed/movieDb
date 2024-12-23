import Login from "@/components/auth/Login";
import Link from "next/link";

export default function Loginpage() {
  return (
    <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
      <div className="text-center mb-6">
        <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>

        <Login />

        <div className="mt-4 flex justify-between text-moviedb-gray text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link href="#" className="hover:underline">
            Need help?
          </Link>
        </div>

        <div className="mt-6 text-moviedb-gray">
          New to moviedb?
          <a href="#" className="text-white hover:underline">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
}