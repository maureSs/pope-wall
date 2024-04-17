import Link from 'next/link'
import Image from 'next/image'
import pope from '../../../public/pope.png'

const NavbarDesktop = () => {
    return (
        <nav className="text-white w-1/5" style={{ backgroundColor: '#0d0f14', opacity: '0.93' }}>
            <div className="container mx-auto py-10">
                <div className="flex flex-row justify-center items-center text-3xl font-bold h-150px">
                    <Image src={pope} alt='dantesito' width={85} height={85} />
                    <h1>Pope Wall</h1>
                </div>
                <div className="h-px bg-gray-600 mt-10"></div>
                <ul className="p-7">
                    <li className="h-12 navbar-border mb-4"><Link href="/" className="block py-4">Home</Link></li>
                    <li className="h-12 navbar-border mb-4"><Link href="/generator" className="block py-4">Password Generator</Link></li>
                    <li className="h-12 navbar-border mb-4"><Link href="/account" className="block py-4">Secure Your Accounts</Link></li>
                    <li className="h-12 navbar-border mb-4"><Link href="/frontend" className="block py-4">Front End Security</Link></li>
                </ul>
                <div className="absolute bottom-10 left-5 text-2xl font-bold">
                    <h3 className="text-lg">maureS</h3>
                </div>
            </div>
        </nav>
    )
}

export default NavbarDesktop