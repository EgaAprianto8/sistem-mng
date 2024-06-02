import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full h-[600px] px-4 sm:px-10 flex flex-col gap-4 drop-shadow-lg py-20 justify-center bg-hero">
      <div className="w-full px-4 sm:px-10 xl:container space-y-6">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold max-w-[765px]">
          Media Nusa Gemilang
        </h1>
        <h3 className="text-white text-base md:text-lg lg:text-2xl font-bold">
          Menyediakan Berbagai Kebutuhan Pendidikan
        </h3>
        <p className="text-white text-sm lg:text-base max-w-[680px] text-justify sm:text-left">
          Kami adalah penyedia terpercaya untuk buku-buku pelajaran sekolah, alat tulis, dan berbagai kebutuhan sekolah lainnya. Temukan berbagai koleksi yang kami tawarkan untuk mendukung proses belajar mengajar Anda.
        </p>
        <button className="bg-[#1DBBB4] w-[154px] h-[48px] rounded-xl mt-4 hover:bg-[#17a69b] transition duration-300 ease-in-out">
          <a className="place-self-center text-white font-semibold" href="#more-info">Read more</a>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
