import { Metadata } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Admin Dashboard | Perpustakaan',
    description: 'Admin Page untuk melakukan input dan merubah data',
};

export default function page() {
    return (
        <div>
        <section className="flex flex-col items-center justify-center p-8">
        <div className='mt-6'>
          <Avatar className='w-24 h-24'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
  
          <h2 className="text-center mt-5 font-bold">Nama Admin</h2>
  
        <div className='mt-12 mb-12 flex gap-12 py-4 px-8 text-lg'>
          <Link href="/dashboard/data-buku">
          <Button variant="outline" className='py-12 px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black'>Data Buku</Button>
          </Link>
  
          <Link href="/dashboard/data-pemasukan">
          <Button variant="outline" className='py-12 px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black'>Data Pemasukan</Button>
          </Link>
  
          <Link href="/dashboard/data-pengeluaran">
          <Button variant="outline" className='py-12 px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black'>Data Pengeluaran</Button>
          </Link>
  
        </div>
      </section>
      </div>
    );
}
