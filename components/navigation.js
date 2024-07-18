import Link from "next/link"
import styles from './navigation.module.css'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import wallet from '../public/images/vector.svg'
import bell from '../public/images/bell.svg'
import question from '../public/images/Question.svg'
import gear from '../public/images/Gear.svg'
import profile from '../public/images/profile.png'
import Image from "next/image"


export default function Navigation () {
    return (<nav>
        <ul className="flex space-x-8 ml-6">
            <div className="flex flex-col justify-center items-center">
            <Image src={bell}  width={15} className=" mt-1 text-linkColor hover:primaryBlue hover:bg-primaryBlue hover:text-primaryBlue"/>
            <li><a href="/about" className={styles.link}>Notification</a></li>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Image src={wallet} width={15}  className="w-16px h-17px text-linkColor mt-1 hover:text-primaryBlue"/>
            <li><Link href="/about" className={styles.link}>Wallet</Link></li>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Image src={question} width={20}  className="mb-0 w-16px h-16px text-linkColor hover:text-primaryBlue" />
            <li><Link href="/about" className={styles.link}>Inquires</Link></li>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Image src={gear}  width={20} className="w-16px h-17px text-linkColor hover:text-primaryBlue"/>
            <li><Link href="/about" className={styles.link}>Settings</Link></li>
            </div>
            <div className="flex space-x-2">
            <Image src={profile} width={44} className="" />
            <ChevronDownIcon  className="mt-4"/>

            </div>
            
        </ul>
        </nav>
)}