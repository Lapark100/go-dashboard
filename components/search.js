import find from '../public/images/icon.svg'
import Image from "next/image"

export default function SearchInput({className}) {
    return (<>
     <div >
    <input type="text" placeholder="Search here..." className={`w-full h-40px text-xs py-3 pl-2 pr-64 border bg-bgColor rounded focus:outline-none focus:ring-2  focus:border-transparent ${className}`} >
    </input>
  </div>
    </>)
}