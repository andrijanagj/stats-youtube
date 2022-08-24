import Image from "next/image";
import React from "react";

function Header({ session, signIn, signOut }) {
  return (
    <>
      <nav className="flex h-12 justify-between shadow-md items-center px-4">
        <h1 className="text-xl md:text-3xl text-sky-400 font-bold">AG</h1>
        <div className="flex flex-1 space-x-10 justify-center">
          <h1 className="text-md md:text-lg font-bold ">Youtube</h1>
          <h1 className="text-md md:text-lg ">Twitter</h1>
          <h1 className="text-md md:text-lg ">Instagram</h1>
        </div>
        {!session && (
          <button
            onClick={() => signIn()}
            className="ease-in duration-300 bg-sky-500 text-white rounded-full w-36 h-10 font-bold shadow-md hover:bg-blue-500 text-md hidden xl:inline"
          >
            Sign In
          </button>
        )}
        {session && (
          <>
            <div className="">
              <Image
                className="rounded-full mt-1 p-2 "
                src={session.user.image}
                width={50}
                height={50}
                layout="fixed"
                alt="user image"
              ></Image>
            </div>

            <p className="text-sky-600 ml-1 font-bold">{session.user.name}</p>
            <button
              className="ease-in duration-300 ml-3 text-gray-500 rounded-full w-24 h-8 text-sm font-bold shadow-md hover:bg-gray-600 hover:text-gray-50 text-md  xl:inline"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        )}
      </nav>
    </>
  );
}

export default Header;
