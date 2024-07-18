import Navigation from "./navigation";
import  SearchInput from './search'
import Image from "next/image"
import Link from "next/link";
import logo from '../public/images/go-icon.png'

export default function Header () {
    return (<> 
    <header className="flex items-center space-x-64 py-4  px-11 bg-white h-1440px w-89px">
        <div className="flex items-center space-x-8 ">
        <Link href="/"  className="bg-primaryBlue h-48px w-49px"><Image  width={50} src={logo}/> </Link>
        <SearchInput />
        </div>
        <Navigation />
    </header>
    
    </>)
}