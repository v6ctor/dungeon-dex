import Image from "next/image";
import { auth } from "@/auth";
import SignIn from "../SignIn/SignIn";
import { SignOut } from "../SignOut/SignOut";

export default async function Header() {
  const session = await auth();

  return (
    <header className="navbar bg-base-300 shadow-sm justify-between items-center p-4">
      <a className="btn btn-ghost text-xl">Dungeon Dex</a>
      {session ? (
        <div className="flex flex-row gap-2 items-center">
          <div className="flex justify-center items-center gap-3">
            <Image
            src={session.user?.image ?? "/vercel.svg"}
            alt="User profile image"
            width={40}
            height={40}
            className="rounded-full"
            />
            <h1 className="font-bold">
              {session.user?.name} {session.user?.id}
            </h1>
          </div>
          <div className="dropdown dropdown-end flex justify-baseline items-baseline">
            <div
              tabIndex={0}
              role="button"
              className="m-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm mt-12"
            >
              <li>
                <a className="hover:bg-base-300 rounded-md transition-colors text-sm">
                  <SignOut></SignOut>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </header>
  );
}
