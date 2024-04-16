import Navbar from "./Navbar/Navbar"

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-auto md:flex md:h-screen">
            <Navbar />
            <div className="w-full md:flex md:justify-center md:items-center md:w-4/5">
                {children}
            </div>
        </main>
    )
}

export default MainContainer