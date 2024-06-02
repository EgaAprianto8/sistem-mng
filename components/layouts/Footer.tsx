"use client";

import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#f1f5f9]">
        <hr className=" border-gray-200 sm:mx-auto" />
          <div className="w-full h-auto px-4 py-6 lg:pt-8">
              <div className="flex flex-wrap justify-center sm:flex sm:justify-between">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center">
                        <Image
                            src="/images/logoSistem.png"
                            width={100}
                            height={100}
                            alt="Logo Company"
                            className="sm:ml-8 mr-8 sm:mr-3"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Hubungi Kami</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="/tentang-kami" className="hover:underline">Kontak</a>
                            </li>
                            <li>
                                <a href="/tentang-kami" className="hover:underline">Alamat</a>
                            </li>
                        </ul>
                    </div>  
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
