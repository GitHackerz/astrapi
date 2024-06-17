import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">ASTRAPI-123</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path fill="white" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href={'/book'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                        Books
                    </Link>
                    <Link href={'/music'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                        Music
                    </Link>
                </div>
                <div>
                    <a href="#responsive-header" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Get Now !</a>
                </div>
            </div>
        </nav>
    )
}