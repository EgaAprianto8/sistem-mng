"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import InputDataSiswa from "@/components/button/InputDataSiswa";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", nama_siswa: "", kelasID: "" });
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchClasses();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("/api/siswa");
    setStudents(response.data);
  };

  const fetchClasses = async () => {
    const response = await axios.get("/api/kelas");
    setClasses(response.data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put("/api/siswa", {
          ...form,
          kelasID: parseInt(form.kelasID, 10),
        });
      } else {
        await axios.post("/api/siswa", {
          ...form,
          kelasID: parseInt(form.kelasID, 10),
        });
      }
      setForm({ id: "", nama_siswa: "", kelasID: "" });
      fetchStudents();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (student: any) => {
    setForm({
      id: student.id.toString(),
      nama_siswa: student.nama_siswa,
      kelasID: student.kelasID.toString(),
    });
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete("/api/siswa", { data: { id } });
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <h1>Ini adalah halaman untuk CRUD data buku</h1>
        <div>
          <InputDataSiswa />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 mt-5">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">Nama Buku</th>
              <th scope="col" className="px-6 py-3">Penerbit</th>
              <th scope="col" className="px-6 py-3">Stock</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: any) => (
              <tr key={student.id} className="bg-blue-500 border-b border-blue-400">
                <td className="px-6 py-4">{student.nama_siswa}</td>
                <td className="px-6 py-4">{student.kelas?.nama_kelas}</td>
                <td className="px-6 py-4">
                 200
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
