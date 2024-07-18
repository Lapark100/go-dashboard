"use client"
import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/api";
import Link from "next/link";
import { CaretSortIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [repo, setRepo] = useState([]);
 
  

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPosts();
        setRepo(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } 
    };
    getData();
  }, []);

 

return (

<div className="absolute ml-72 pt-6">

    <div className="text-sm text-userSubColor font-normal">
        Settings / Users & Roles Settings
    </div>

    <div className="mt-10">
        <h1 className="font-semibold text-3xl mb-2">
            Users & Role
        </h1>
        <p className="text-sm text-userSubColor font-normal">
            Manage all users in your business
        </p>
    </div>
    <div className="flex gap-4 mt-5">
        <div className="py-2 px-4">
            <Link href=""className="">
            Users
            </Link>
        
        </div>
        <div className="py-2 px-4">
        <Link href='/' className="">
            Roles
            </Link>
        </div>
    </div>
    <div className= "flex items-center pl-3 bg-white w-auto h-16 rounded justify-between pr-3">
    <input type="text" placeholder="Search here..." className={`w-full h-40px text-xs py-3 pl-2 pr-32 border bg-white rounded focus:outline-none focus:ring-2  focus:border-transparent`} />
        <div className="flex border border-solid border-0.4 ml-2 rounded py-2 px-3 w-20 h-9 text-xs  items-center mr-64">
            <CaretSortIcon />
            Filter
        </div>
        <Link href="add" className="w-64 h-8  bg-primaryBlue text-white rounded  text-xs flex justify-center items-center" >
            <PlusCircledIcon width={30} className="pr-1"  />
            New User
        </Link>
    </div>

    <div className="flex w-full justify justify-between p-4">
        <div className="flex justify-center items-center text-xs space-x-1">
            <input type="checkbox" />
            <h3>Name</h3>
            <CaretSortIcon />
        </div>

        <div className="flex justify-center items-center text-xs space-x-1">
            
            <h3>E-mail Address</h3>
            <CaretSortIcon />
        </div>

        <div className="flex justify-center items-center text-xs space-x-1">
            
            <h3>Role</h3>
            <CaretSortIcon />
        </div>

        <div className="flex justify-center items-center space-x-1">
            
            <h3 className="text-xs">Actions</h3>
            <CaretSortIcon />
        </div>
    </div>
    
{/* Display Users */}

{repo.map((users) => {
return (
<div key={users.id} className="flex w-full justify justify-between p-4 bg-white">
        <div className="flex justify-center items-center text-xs space-x-1">
            <input type="checkbox" />
            <h3>{users.fullName}</h3>
            
        </div>

        <div className="flex justify-center items-center text-xs space-x-1">
            
            <h3>{users.email}</h3>
            
        </div>

        <div className="flex justify-center items-center text-xs space-x-1">
            
            {users.role === 'user'? <h3 className="flex justify-center items-center bg-[#F0F6F3] py-[2px] px-[12px] text-[#0D6EFD] rounded-sm" >{users.role}</h3> : <h3>{users.role}</h3> || users.role === 'Sales Manager'? <h3 className="flex justify-center items-center bg-[#E7F6EC] py-[2px] px-[12px] text-[#0F973D] rounded-sm" >{users.role}</h3> : <h3>{users.role}</h3> || users.role === 'Sales Representative'? <h3 className="flex justify-center items-center bg-[#F58A07] py-[2px] px-[12px] text-[#0D6EFD] rounded-sm" >{users.role}</h3> : <h3>{users.role}</h3> }
           
            
            
        </div>

        <div className="flex justify-center items-center space-x-1">
            
            <div className="flex space-x-1">
            <Link href="/edit"className="text-xs text-primaryBlue">Edit</Link>
            <Link href={`/delete/${users.id}`}  className="text-xs text-userSubColor">Remove</Link> 
            </div>
            
            
            
        </div>
    </div>
)
})}
      

 
</div>
)
}