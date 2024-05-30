import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type PropTypes = {
    children: React.ReactNode;
};

const DashboardLayouts = ({ children }: PropTypes) => {
    return (
        <div className="flex flex-col h-full">
            {/* Navbar */}
            <div className="flex w-full bg-[#9b52bd] h-[20%] drop-shadow-xl">
                <div className="w-full p-[30px] flex justify-between ">
                    <div className="flex flex-row">
                        <div className="relative w-[50px] h-[50px]">
                            <Image src="/images/logoSistem.png" alt="logo" fill={true} className="object-cover" />
                        </div>
                        <div className="border-r border-white mr-[15px] ml-[15px] h-[35px] my-auto" />
                        <h1 className="font-bold text-white my-auto text-2xl">Sistem Informasi PAUD Bani Ruqoyah</h1>
                    </div>
                    <Popover>
                        <PopoverTrigger>
                            <div className="relative w-[50px] h-[50px] bg-white rounded-full"></div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex flex-col gap-2">
                                <button
                                    title="p"
                                    className="hover:bg-[#f5e0ff] bg-white text-black hover:text-[#9B52BD] p-2 rounded-2xl"
                                >
                                    Profile
                                </button>
                                <button title="p" className="hover:bg-red-200 bg-white p-2 rounded-2xl">
                                    Logout
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="bg-[#9b52bd] w-full h-[100px]" />
            {/* Sidebar */}
            <div className="flex flex-row">
                {/* Navigasi Sidebar */}
                <div className="bg-white -mt-14 h-[800px] xl:w-[20%] sm:w-[30%] flex flex-col gap-20 border ml-10 rounded-xl">
                    <div className="flex flex-col gap-4 p-10">
                        <div className="relative xl:w-[75px] xl:h-[75px] sm:w-[50px] sm:h-[50px] rounded-full bg-white border mx-auto"></div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold text-black text-center">Nama Admin</h1>
                            <div className="text-[#6fcf97] bg-[#e2f5ea] py-1 px-4 rounded-full w-fit items-center mx-auto">
                                <h1>Administrator</h1>
                            </div>
                        </div>
                    </div>

                    {/* Tombol Navigasi */}
                    <div className="flex flex-col gap-2 mx-5 ">
                        <button className="bg-[#f5e0ff] text-[#9B52BD] rounded-3xl w-full py-4 px-10 font-bold">
                            <Link href="/dashboard" className="flex flex-row gap-4 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                                Beranda
                            </Link>
                        </button>
                        <button className="hover:bg-[#f5e0ff] bg-white hover:text-[#9B52BD] text-black rounded-3xl w-full py-4 px-10 hover:font-bold">
                            <Link href="/dashboard/progress" className="flex flex-row gap-4 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                                    />
                                </svg>
                                Progress Harian
                            </Link>
                        </button>
                        <button className="hover:bg-[#f5e0ff] bg-white hover:text-[#9B52BD] text-black rounded-3xl w-full py-4 px-10 hover:font-bold">
                            <Link href="/dashboard/datasiswa" className="flex flex-row gap-4 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                                    />
                                </svg>
                                Data Siswa
                            </Link>
                        </button>
                        <button className="hover:bg-[#f5e0ff] bg-white hover:text-[#9B52BD] text-black rounded-3xl w-full py-4 px-10 hover:font-bold">
                            <Link href="/dashboard/rapotsemester" className="flex flex-row gap-4 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                    />
                                </svg>
                                Rapot Semester
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Nama Halaman */}
                <div className="absolute my-auto ml-10 text-white -mt-[55px] left-[400px] font-semibold xl:text-4xl text-3xl">
                    Beranda
                </div>

                <div className="w-full bg-white border rounded-2xl h-full shadow-md m-10 p-10">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayouts;
