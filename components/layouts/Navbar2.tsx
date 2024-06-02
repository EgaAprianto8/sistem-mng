"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdContactSupport } from "react-icons/md";

const Navbar2 = () => {
  const [sudahLogin, setSudahLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      setSudahLogin(localStorage.getItem('sudahMasuk') === 'true');
    }
  }, []);

  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px] border-b px-2">
        <div className="sm:gap-4 gap-4 px-2 flex flex-row sm:px-10 py-4">
          <Link
            href="/"
            className="font-bold sm:p-2 text-[#1a1668] hover:text-[#5488c4] my-auto text-xs sm:text-normal"
          >
            Home
          </Link>
          <Link
            href="/tentang-kami"
            className="font-bold sm:p-2 text-[#1a1668] hover:text-[#5488c4] my-auto text-xs sm:text-normal"
          >
            Tentang Kami
          </Link>
          {sudahLogin && (
            <Link
              href="/dashboard"
              className="font-bold sm:p-2 text-[#1a1668] hover:text-[#5488c4] my-auto text-xs sm:text-normal"
            >
              Admin Dashboard
            </Link>
          )}
          <Link
            href="/tentang-kami"
            className="text-[#5488c4] flex sm:hidden ml-auto shadow-md rounded-md p-1"
          >
            <MdContactSupport size={20} />
          </Link>
          <div className="my-auto sm:ml-auto hidden sm:flex">
            <Link
              href="/tentang-kami"
              title="/tentang-kami"
              className="text-xs sm:text-normal sm:py-4 sm:px-8 p-1 text-center bg-[#5488c4] text-white w-full rounded-md sm:font-bold hover:bg-[#3e6491] ease-in-out duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
