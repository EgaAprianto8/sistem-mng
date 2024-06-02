'use client';

import React, { useState } from 'react';
import { createBook, updateBook } from '@/lib/firebase/service';

const InputBuku = ({ bookId }: { bookId?: string }) => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        category: '',
        publisher: '',
        publicationYear: '',
        description: '',
        stock: 0,
        status: '',
    });

    const handleInputChange = (e: any) => {
        setBookData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Book Data:', bookData); // Add this line
        if (bookId) {
            // Update book
            const result = await updateBook(bookId, bookData);
            console.log(result); // Handle the result as needed
        } else {
            // Create book
            const result = await createBook(bookData);
            console.log(result); // Handle the result as needed
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Daftarkan Buku</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5 p-6.5">
                    <div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">Foto Buku</label>
                            <input
                                title="fotobuku"
                                type="file"
                                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">Penulis</label>
                            <input
                                name="author"
                                type="text"
                                placeholder="Masukan nama penulis"
                                value={bookData.author}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">Kategori</label>
                            <input
                                name="category"
                                type="text"
                                placeholder="Masukan kategori"
                                value={bookData.category}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">Judul buku</label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Masukan judul buku"
                                value={bookData.title}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">Penerbit</label>
                            <input
                                name="publisher"
                                type="text"
                                placeholder="Masukan penerbit"
                                value={bookData.publisher}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">Tahun Terbit</label>
                            <div className="relative">
                                <input
                                    name="publicationYear"
                                    title="tahunterbit"
                                    type="date"
                                    value={bookData.publicationYear}
                                    onChange={handleInputChange}
                                    className="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <label className="mb-3 block text-black dark:text-white">Deskripsi buku</label>
                        <textarea
                            name="description"
                            rows={6}
                            placeholder="Masukan deskripsi buku"
                            value={bookData.description}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        ></textarea>
                    </div>
                    <div className="md:col-span-1">
                        <label className="mb-3 block text-black dark:text-white">Stock</label>
                        <input
                            name="stock"
                            type="text"
                            placeholder="Masukan stock buku"
                            value={bookData.stock}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <div className="md:col-span-1">
                        <label className="mb-3 block text-black dark:text-white">Status</label>
                        <input
                            name="status"
                            type="text"
                            placeholder="Tersedia||Tidak Tersedia"
                            value={bookData.status}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                </div>
                <div className="my-auto ml-auto">
                    <button
                        title="Submit-buku"
                        type="submit"
                        className="py-4 px-8 text-center bg-[#54c47b] text-white w-full rounded-md font-bold hover:bg-[#3e915a] ease-in-out duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputBuku;
