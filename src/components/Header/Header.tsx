import Image from "next/image";
import { auth } from "@/auth";
import SignIn from "../SignIn/SignIn";

export default async function Header() {
  const session = await auth();

  return (
    <header className="navbar bg-base-300 shadow-sm justify-between items-center p-6 md:px-10">
      <a className="btn btn-ghost text-xl">Dungeon Dex</a>

      {session ? (
        <div className="flex flex-row gap-3 justify-center items-center">
          <h1 className="font-bold">
            {session.user?.name} {session.user?.id}
          </h1>
          <Image
            src={session.user?.image ?? "/vercel.svg"}
            alt="User profile image"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      ) : (
        <SignIn />
      )}
    </header>
  );
}
