'use client'
import { useState } from 'react';
import Link from 'next/link';
import { createPost } from '@/lib/api';
import styles from "@/components/navigation.module.css"
import { EyeClosedIcon, EyeOpenIcon, PersonIcon, Cross2Icon } from '@radix-ui/react-icons';

export default function AddUserForm({ onUserAdded}) {

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('user');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { email, fullName, role, password };
        try {
          const newUser = await createPost(formData);
          if (onUserAdded) {
            onUserAdded(newUser);
          }
        } catch (error) {
          console.error('Error adding user:', error);
        }
      };
    

    

    return (<div className=' flex inset-0 bg-gray-600 bg-opacity-500 items-center justify-center'>
        <div className='absolute bg-white  w-[400px] h-[500px] pt-[32px] pr-[32px] pb-[56px] pl-[32px] rounded mt-[35rem] '>
        <Link href="/users" className='absolute ml-[20rem] mb-10'>
                <Cross2Icon />
            </Link>
            <div className='flex flex-col justify-center items-center mb-4'>
                <div className='flex w-9 h-9 mb-2 border border-solid border-1 border-sideHover bg-sideHover items-center justify-center rounded-[150px]'>
                    <PersonIcon width={10} className='w-5 h-5 text-primaryBlue' />
                </div>
                <h1 className='text-xl font-bold'> New User </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email' className={styles.label}> Email Address:</label>
                <input type='email' placeholder='New User’s E-mail Address' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} required className={styles.input}/>

                <label htmlFor='full Name' className={styles.label}> Full Name:</label>
                <input type='text' placeholder='New User’s Full Name' value={fullName} onChange={(e) => {
                    setFullName(e.target.value)
                }} required className={styles.input} />

                <label htmlFor='role' className={styles.label}> Role</label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className={styles.input}
                   
                >
                    <option value="Admin" className='text-[10px] text-userSubColor'>Admin</option>
                    <option value="Sales Manager" className='text-[10px] text-userSubColor'>Sales Manager</option>
                    <option value="Sales Representative" className='text-[10px] text-userSubColor'>Sales Representative
                    </option>

                </select>
                <label htmlFor='password' className={styles.label}> Password </label>
                <div>
                    {isVisible ? <EyeClosedIcon onClick={() => setIsVisible(false)} className='absolute my-2 ml-[19rem]'/> : <EyeOpenIcon onClick={() => setIsVisible(false)} className='absolute my-2 ml-[19rem]'/>}
                
                <input
                    type={isVisible? "text": "password"}
                    placeholder="Create a Password For New User"
                    value={password }
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    required
                />
                </div>
                
                <button type="submit" className="bg-blue-500 w-full text-white py-4 px-6 rounded text-xs mt-4">
                    Add User
                </button>
            </form>
        </div>
    </div>)
}