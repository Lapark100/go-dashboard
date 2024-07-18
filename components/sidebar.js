import Link from "next/link"
import { PersonIcon, LockClosedIcon, BellIcon, MaskOffIcon, BookmarkIcon, Component2Icon, GlobeIcon, ExitIcon } from '@radix-ui/react-icons'
export default function Sidebar () {
return (<>
    <div className="w-48 h-screen ml-10 mt-5 bg-white text-sideBarColor flex flex-col rounded">
      <div className="p-4 text-lg font-bold">
        <h3 className="text-xs text-black">
            Settings
        </h3>
      </div>
      <nav className="flex flex-col mt-1 pl-4 pr-4 ">
        <Link href="/" className=" flex p-3 hover:bg-sideHover text-sm rounded hover:text-primaryBlue">
          <Component2Icon width={20} className="mt-0.5 pr-1"  /> Account
        </Link>
        <Link href="/" className=" flex p-3 hover:bg-sideHover text-sm rounded hover:text-primaryBlue">
          <LockClosedIcon width={20} className="mt-0.5 pr-1"  /> Security
        </Link>
        <Link href="/" className=" flex p-3 hover:bg-sideHover text-sm rounded hover:text-primaryBlue">
          <BellIcon width={20} className="mt-0.5 pr-1"  /> Notifications
        </Link>
        <Link href="/" className=" flex p-3 hover:bg-sideHover text-sm hover:text-primaryBlue">
          <MaskOffIcon width={20} className="mt-0.5 pr-1"  /> Pricing
        </Link>
        <Link href="/" className=" flex p-3 hover:bg-sideHover text-sm rounded hover:text-primaryBlue">
          <BookmarkIcon width={20} className="mt-0.5 pr-1"  /> Sales
        </Link>
        <Link href="/users" className=" flex p-3 hover:bg-sideHover text-sm rounded hover:text-primaryBlue">
          <PersonIcon width={20} className="mt-0.5 pr-1"  /> User & Roles
        </Link>
        <Link href="/" className=" flex p-3 hover:bg-sideHover text-sm rounded hover:text-primaryBlue">
          <GlobeIcon width={20} className="mt-0.5 pr-1"  /> Backups
        </Link>
        <hr></hr>

        <div className="pt-36  pr-1">
        <Link href="/" className=" flex justify-center px-2 py-3 border-solid border-2 border-gray-400 hover:bg-sideHover text-xs rounded hover:text-primaryBlue">
          <ExitIcon width={20} className="mt-0.5 pr-1"  />Back to Dashboard
        </Link>
        </div>
      </nav>
    </div>
</>)
}