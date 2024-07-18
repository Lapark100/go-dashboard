"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { deletePost } from '@/lib/api';
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function DeleteUser () {
    const router = useRouter();
    const [id, setId] = useState(null);

    useEffect(() => {
        if (router.query.id) {
          setId(router.query.id);
        }
      }, [router.query]);

    const handleDelete = async () => {
        try {
          await deletePost(id);
          router.push('/'); // Redirect to the main page after deletion
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };


return (
    <div className=' flex inset-0 bg-gray-600 bg-opacity-500 items-center justify-center'>
    <div className='absolute bg-white  w-[450px] h-[250px] pt-[32px] pr-[32px] pb-[56px] pl-[32px] rounded mt-[35rem] justify-center items-center flex flex-col '>
        <div className='flex justify-center items-center mb-4'>
            <h1 className='text-xl font-bold '> Delete this user </h1>
        </div>
        <div>
            <p className="text-center text-xs text-deleteColor px-12">
                This user and all associated data will be permanently removed. Do you wish to continue
            </p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-5">
            <Link href="/" className=" py-[8px] px-[12px] text-[12px] border border-x-1 border-[#D0D5DD] bg-[#F7F9FC] text-[#475367] font-bold"> Cancel action</Link>
            <Link href="/users" onClick={handleDelete}  className=" flex justify-center items-center py-[8px] px-[14px] text-[12px] border border-[#EB9B98] border-x-1 font-bold bg-[#FBEAE9] text-[#D42620]"> 
            <Cross2Icon width={20} className="pr-1"/> 
            Yes, Delete
            </Link>
            
            
        </div>
    </div>
</div>
)
}