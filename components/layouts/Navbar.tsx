"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [sudahLogin, setSudahLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      setSudahLogin(localStorage.getItem('sudahMasuk') === 'true');
    }
  }, []);

  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px] py-2">
        <div className="p-2 flex flex-row justify-between border-b gap-4 lg:px-10">
          <Link href="/" className="my-auto flex-row flex gap-4">
            <div className="relative  w-[50px] h-[50px]">
              <Image
                src="/images/logoSistem.png"
                alt="logo"
                fill={true}
                className="object-cover w-[50px] h-[50px]"
              />
            </div>
            <div className="lg:flex my-auto hidden">
              <h1 className="font-black text-xl text-[#1a1668]">
                Media Nusa Gemilang
              </h1>
            </div>
          </Link>
          <div className="flex flex-row gap-4">
            {sudahLogin ? (
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-row my-auto gap-4">
                    <div className="w-[50px] text-[#1a1668] h-[50px] rounded-xl my-auto">
                      <svg
                        data-slot="icon"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="lg:flex hidden flex-col gap-1.5 text-start">
                      <h1 className="text-lg font-bold text-[#1a1668]">
                        {/* {data && data.user.fullname} */}
                      </h1>
                      {/* <h3 className="text-sm">{data && data.user.email}</h3> */}
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-1.5 text-start border-dotted border-b-2 w-full pb-2 border-[#e9ecef]">
                      <h1 className="text-lg font-bold text-[#1a1668]">
                        Admin
                      </h1>
                      <h3 className="text-normal text-[#999ea3]">
                        Selamat Datang
                      </h3>
                    </div>
                    <Link
                      href="/dashboard"
                      className="flex flex-col gap-1.5 text-start border-dotted border-b-2 w-full py-2 border-[#e9ecef] hover:bg-[#f5f5f5] ease-in-out duration-300"
                    >
                      <div className="flex flex-row ">
                        <div className="mx-2 my-auto text-[#5488c4]">
                          <FaRegBookmark size={15} />
                        </div>
                        <h1 className="text-normal">Dasboard</h1>
                      </div>
                    </Link>
                    <div className="py-4 w-full">
                      <button
                        onClick={() => {
                          localStorage.setItem('sudahMasuk', 'false');
                          setSudahLogin(false);
                          router.refresh();
                        }}
                        title="logout"
                        className="py-3 text-center bg-[#5488c4] text-white w-full rounded-xl font-bold hover:bg-[#3e6491] ease-in-out duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="my-auto ml-auto">
                <Link
                  href="/masuk"
                  title="Login"
                  className="py-4 px-8 text-center bg-[#54c47b] text-white w-full rounded-md font-bold hover:bg-[#3e915a] ease-in-out duration-300"
                >
                  Masuk
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
