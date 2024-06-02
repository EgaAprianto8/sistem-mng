"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [sudahLogin, setSudahLogin] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      setSudahLogin(localStorage.getItem('sudahMasuk'));
    }
  }, []);

  return (
    <div className="relative lg:mt-0 w-full h-[600px] px-4 sm:px-10 flex flex-col gap-4 drop-shadow-lg py-20 justify-center bg-hero">
      <div className="absolute h-full top-0 left-0 right-0 bottom-0 bg-black/50 -z-[1]" />
      <div className="w-full px-4 sm:px-10 xl:container space-y-6">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold max-w-[765px]">
          Media Nusa Gemilang
        </h1>
        <h3 className="text-white text-base md:text-lg lg:text-2xl font-bold">
          Menyediakan Berbagai Kebutuhan Pendidikan
        </h3>
        <p className="text-white text-sm lg:text-base max-w-[680px] text-justify sm:text-left">
          Kami adalah penyedia terpercaya untuk buku-buku pelajaran sekolah,
          alat tulis, dan berbagai kebutuhan sekolah lainnya. Temukan berbagai
          koleksi yang kami tawarkan untuk mendukung proses belajar mengajar
          Anda.
        </p>

        {sudahLogin === "true" ? (
          <div>
            <Link
              href="/dashboard"
              title="dashboard"
              className="bg-[#5488c4] w-[154px] h-[48px] rounded-lg mt-4 hover:bg-[#3e6491] transition duration-300 ease-in-out text-white p-4"
            >
              Dashboard
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSection;
