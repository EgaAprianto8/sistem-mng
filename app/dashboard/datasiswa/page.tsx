// app/dashboard/datasiswa/page.tsx

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
    const response = await axios.get("/api/kelas"); // assuming you have a similar API endpoint for classes
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
        <h1>Ini adalah halaman untuk CRUD data siswa</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={form.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nama_siswa"
            placeholder="Nama Siswa"
            value={form.nama_siswa}
            onChange={handleChange}
            required
          />
          <select
            name="kelasID"
            value={form.kelasID}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Pilih Kelas
            </option>
            {classes.map((kelas: any) => (
              <option key={kelas.id} value={kelas.id}>
                {kelas.nama_kelas}
              </option>
            ))}
          </select>
          <button type="submit">{form.id ? "Update" : "Create"}</button>
        </form>
          <div>
           <InputDataSiswa/>
          </div>
      </div>
      <table className="w-full table-auto border-collapse mt-5">
        <thead>
          <tr>
            <th>Nama Siswa</th>
            <th>Kelas</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: any) => (
            <tr key={student.id}>
              <td>{student.nama_siswa}</td>
              <td>{student.kelas?.nama_kelas}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
