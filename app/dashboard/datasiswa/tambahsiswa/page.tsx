import React from "react";

const page = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="Nama"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Siswa
          </label>
          <input
            type="Nama"
            id="Nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Masukan Nama Siswa"
            required
          />
        </div>
        <label
          for="Kelas"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Masukan Kelas
        </label>
        <select
        title="kelas"
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        >
          <option>A</option>
          <option>B</option>
        </select>
        <button
          type="submit"
          className="text-white mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Tambah Siswa
        </button>
      </form>
    </div>
  );
};

export default page;
